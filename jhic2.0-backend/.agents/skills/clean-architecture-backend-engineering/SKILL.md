---
name: clean-architecture-backend-engineering
description: Clean Architecture implementation for senior backend engineers. Use when designing layered systems with strict dependency rules, implementing DDD patterns, organizing business logic with CQRS, or building maintainable enterprise APIs. Covers domain modeling, application services, infrastructure separation, and testing strategies.
---

# Clean Architecture for Backend Systems

Strict layered architecture with dependency inversion for scalable backend systems.

## When to Apply

- Building enterprise applications with complex business rules
- Implementing Domain-Driven Design with clear boundaries
- Creating testable systems with separated concerns
- Organizing large codebases across multiple teams
- Migrating from anemic models to rich domain logic

## Critical Rules

**Dependency Direction**: Dependencies flow inward only - Domain has no dependencies, Infrastructure depends on Domain, Application depends on Domain.

```csharp
// WRONG - Domain depending on infrastructure
public class Order
{
    public void Save() => DbContext.SaveChanges(); // Infrastructure leak
}

// RIGHT - Domain isolated, dependencies inverted
public class Order
{
    public void MarkAsShipped(DateTime shippedAt)
    {
        Status = OrderStatus.Shipped;
        ShippedAt = shippedAt;
        // Domain event for side effects
        Events.Add(new OrderShippedEvent(Id, shippedAt));
    }
}
```

**No Anemic Models**: Entities must contain behavior, not just properties.

```csharp
// WRONG - Anemic domain model
public class Cart
{
    public List<CartItem> Items { get; set; } = new();
    public decimal Total { get; set; }
}

// RIGHT - Rich domain model with encapsulation
public class Cart
{
    private readonly List<CartItem> _items = new();
    public IReadOnlyCollection<CartItem> Items => _items.AsReadOnly();
    
    public void AddItem(Product product, int quantity)
    {
        var existingItem = _items.FirstOrDefault(i => i.ProductId == product.Id);
        if (existingItem != null)
        {
            existingItem.IncreaseQuantity(quantity);
        }
        else
        {
            _items.Add(new CartItem(product, quantity));
        }
    }
}
```

## Layer Structure

### Domain (Core)
- Entities with encapsulated behavior
- Value Objects (immutable)
- Domain Events
- Specifications for complex queries
- No external dependencies

```csharp
public class Product : BaseEntity
{
    private Product() {} // EF Constructor
    
    public Product(string name, decimal price)
    {
        Guard.Against.NullOrEmpty(name);
        Guard.Against.NegativeOrZero(price);
        
        Name = name;
        Price = price;
    }
    
    public string Name { get; private set; }
    public decimal Price { get; private set; }
    
    public void UpdatePrice(decimal newPrice)
    {
        Guard.Against.NegativeOrZero(newPrice);
        if (Price != newPrice)
        {
            Price = newPrice;
            Events.Add(new ProductPriceChangedEvent(Id, Price, newPrice));
        }
    }
}
```

### Application (Use Cases)
- Command/Query handlers (CQRS pattern)
- Application services
- Depends only on Domain abstractions

```csharp
public class AddToCartHandler(
    IRepository<Cart> cartRepository,
    IReadRepository<Product> productRepository)
    : ICommandHandler<AddToCartCommand, Result<CartDto>>
{
    public async ValueTask<Result<CartDto>> Handle(
        AddToCartCommand request, 
        CancellationToken cancellationToken)
    {
        var cart = await cartRepository.GetByIdAsync(request.CartId);
        var product = await productRepository.GetByIdAsync(request.ProductId);
        
        cart.AddItem(product, request.Quantity);
        await cartRepository.UpdateAsync(cart);
        
        return new CartDto(cart.Id, cart.Items.Count);
    }
}
```

### Infrastructure
- Repository implementations
- External service integrations
- Database configurations
- Implements Domain interfaces

```csharp
public class EfRepository<T> : IRepository<T> where T : BaseEntity
{
    private readonly DbContext _context;
    
    public async Task<T> AddAsync(T entity)
    {
        await _context.Set<T>().AddAsync(entity);
        await _context.SaveChangesAsync();
        return entity;
    }
}

// EF Configuration - separate from entities
public class CartConfiguration : IEntityTypeConfiguration<Cart>
{
    public void Configure(EntityTypeBuilder<Cart> builder)
    {
        builder.HasKey(c => c.Id);
        builder.HasMany(c => c.Items)
               .WithOne()
               .HasForeignKey("CartId");
    }
}
```

### Presentation (API)
- FastEndpoints for clean API structure
- One endpoint per file
- Delegates to Application layer

```csharp
public class AddToCartEndpoint(IMediator mediator)
    : Endpoint<AddToCartRequest, Results<Ok<CartResponse>, NotFound>>
{
    public override async Task<Results<Ok<CartResponse>, NotFound>> 
        ExecuteAsync(AddToCartRequest request, CancellationToken ct)
    {
        var command = new AddToCartCommand(request.CartId, request.ProductId, request.Quantity);
        var result = await mediator.Send(command, ct);
        
        return result.IsSuccess 
            ? TypedResults.Ok(result.Value)
            : TypedResults.NotFound();
    }
}
```

## Testing Strategy

**Unit Tests**: Focus on Domain logic in isolation

```csharp
public class CartTests
{
    [Fact]
    public void AddItem_ExistingProduct_IncreasesQuantity()
    {
        var cart = new Cart(Guid.NewGuid());
        var product = new Product("Test", 10m);
        cart.AddItem(product, 1);
        
        cart.AddItem(product, 2);
        
        Assert.Single(cart.Items);
        Assert.Equal(3, cart.Items.First().Quantity);
    }
}
```

**Functional Tests**: Test endpoints without network layer

```csharp
public class CartEndpointsTests : IClassFixture<WebApplicationFactory<Program>>
{
    [Fact]
    public async Task CreateCart_ReturnsSuccess()
    {
        var client = _factory.CreateClient();
        
        var response = await client.PostAsync("/carts", null);
        
        response.EnsureSuccessStatusCode();
        var cart = await response.Content.ReadFromJsonAsync<CartResponse>();
        Assert.NotNull(cart?.Id);
    }
}
```

## Common Mistakes

- **Bypassing Domain Logic**: Never manipulate entity state directly outside the entity
- **Infrastructure Leakage**: Avoid EF attributes or database concerns in Domain entities
- **Fat Controllers**: Keep presentation layer thin - delegate to Application services
- **Generic Repository Overuse**: Use specific repositories or specifications for complex queries