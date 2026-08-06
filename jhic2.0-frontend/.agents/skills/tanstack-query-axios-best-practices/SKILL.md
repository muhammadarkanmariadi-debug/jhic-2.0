---
name: tanstack-query-axios-best-practices
description: TanStack Query with Axios integration patterns for modern data fetching. Use when implementing caching strategies, query invalidation, optimistic updates, error handling, and infinite scroll patterns with TanStack Query and Axios.
---

# TanStack Query + Axios Best Practices

Clean, performant data fetching with proper caching, error handling, and state management.

## When to Apply

- Setting up query client with optimal defaults
- Implementing proper query key patterns and invalidation
- Building mutations with optimistic updates
- Handling errors and retry strategies
- Creating infinite scroll with pagination

## Critical Rules

**Query Keys Must Include All Variables**: Include every variable used in queryFn

```typescript
// WRONG - missing todoId dependency
const { data } = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetchTodoById(todoId),
})

// RIGHT - all dependencies in key
const { data } = useQuery({
  queryKey: ['todos', todoId],
  queryFn: () => fetchTodoById(todoId),
})
```

**Stable QueryClient Instance**: Create once with useState initializer

```typescript
// WRONG - recreates client on every render
const queryClient = new QueryClient()

// RIGHT - stable instance
const [queryClient] = useState(() => new QueryClient())
```

**Proper Axios Signal Integration**: Pass AbortSignal to axios for cancellation

```typescript
// WRONG - no cancellation support
queryFn: () => axios.get('/todos')

// RIGHT - automatic request cancellation
queryFn: ({ signal }) => axios.get('/todos', { signal })
```

## Key Patterns

### QueryClient Setup

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      retry: (failureCount, error) => {
        // Don't retry 4xx errors
        if (error?.response?.status >= 400 && error?.response?.status < 500) {
          return false
        }
        return failureCount < 3
      },
    },
  },
})
```

### Query Key Factory

```typescript
const todoKeys = {
  all: () => ['todos'] as const,
  lists: () => [...todoKeys.all(), 'list'] as const,
  list: (filters: TodoFilters) => [...todoKeys.lists(), filters] as const,
  details: () => [...todoKeys.all(), 'detail'] as const,
  detail: (id: string) => [...todoKeys.details(), id] as const,
}
```

### Axios Integration with Error Handling

```typescript
const { data, error, isLoading } = useQuery({
  queryKey: todoKeys.detail(todoId),
  queryFn: async ({ signal }) => {
    try {
      const { data } = await axios.get(`/api/todos/${todoId}`, { signal })
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || error.message)
      }
      throw error
    }
  },
  enabled: !!todoId,
})
```

### Optimistic Updates with Rollback

```typescript
const updateTodoMutation = useMutation({
  mutationFn: (updatedTodo: Todo) => 
    axios.put(`/api/todos/${updatedTodo.id}`, updatedTodo),
  
  onMutate: async (newTodo, context) => {
    await context.client.cancelQueries({ queryKey: todoKeys.detail(newTodo.id) })
    
    const previousTodo = context.client.getQueryData(todoKeys.detail(newTodo.id))
    
    context.client.setQueryData(todoKeys.detail(newTodo.id), newTodo)
    
    return { previousTodo }
  },
  
  onError: (err, variables, onMutateResult, context) => {
    if (onMutateResult?.previousTodo) {
      context.client.setQueryData(
        todoKeys.detail(variables.id),
        onMutateResult.previousTodo
      )
    }
  },
  
  onSettled: (data, error, variables, onMutateResult, context) => {
    context.client.invalidateQueries({ queryKey: todoKeys.detail(variables.id) })
  },
})
```

### Infinite Query with Axios

```typescript
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery({
  queryKey: todoKeys.lists(),
  queryFn: async ({ pageParam = 0, signal }) => {
    const { data } = await axios.get('/api/todos', {
      params: { page: pageParam, limit: 20 },
      signal,
    })
    return data
  },
  initialPageParam: 0,
  getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  maxPages: 3, // Limit memory usage
})
```

### Smart Query Invalidation

```typescript
// Invalidate specific patterns
const invalidateTodos = () => {
  // All todo queries
  queryClient.invalidateQueries({ queryKey: todoKeys.all() })
  
  // Only lists, not details
  queryClient.invalidateQueries({ queryKey: todoKeys.lists() })
  
  // Exact match only
  queryClient.invalidateQueries({ 
    queryKey: todoKeys.detail(todoId), 
    exact: true 
  })
  
  // Using predicate for complex logic
  queryClient.invalidateQueries({
    predicate: (query) => 
      query.queryKey[0] === 'todos' && query.queryKey[1]?.version >= 10
  })
}
```

## Common Mistakes

- **Missing enabled checks**: Always use `enabled: !!dependency` for dependent queries
- **Not handling Axios errors**: Wrap in try-catch and check `axios.isAxiosError(error)`
- **Stale closures in mutations**: Access fresh data via context.client methods, not component state
- **Over-invalidation**: Use specific query key patterns instead of invalidating everything
- **Missing signal parameter**: Always destructure `{ signal }` from queryFn context for cancellation