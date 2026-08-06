---
name: casl-authorization-expert
description: Complete CASL authorization system implementation. Use when defining abilities with MongoDB operators, building rule-based permissions, integrating with React/Angular/Vue, handling field-level restrictions, updating permissions dynamically, or managing database queries with Prisma/Mongoose.
---

# CASL Authorization Expert

Full-stack authorization library for JavaScript applications with rule-based permissions and database integration.

## When to Apply

- Building role-based access control (RBAC) systems
- Implementing field-level permissions
- Creating dynamic permissions that update on login/logout
- Integrating authorization with React, Angular, or Vue
- Filtering database queries by user permissions
- Handling complex conditional permissions with MongoDB operators

## Critical Rules

**Rule Definition Pattern**: Always use `AbilityBuilder` with `createMongoAbility` for production code

```javascript
// WRONG - defineAbility for simple cases only
import { defineAbility } from '@casl/ability';
export default defineAbility((can, cannot) => {
  can('read', 'Post');
});

// RIGHT - AbilityBuilder for real applications
import { AbilityBuilder, createMongoAbility } from '@casl/ability';

export function defineAbilityFor(user) {
  const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
  
  if (user.isAdmin) {
    can('manage', 'all');
  } else {
    can('read', 'Post', { published: true });
    can('manage', 'Post', { authorId: user.id });
  }
  
  return build();
}
```

**Dynamic Updates**: Use `ability.update()` for login/logout, not creating new instances

```javascript
// WRONG - creating new ability instances
const newAbility = defineAbilityFor(newUser);

// RIGHT - updating existing instance
const { can, rules } = new AbilityBuilder(createMongoAbility);
if (user.role === 'admin') {
  can('manage', 'all');
}
ability.update(rules);
```

**Subject Type Detection**: Define explicit subject types for classes

```javascript
// WRONG - relying on constructor names
class BlogPost {
  constructor(title, authorId) {
    this.title = title;
    this.authorId = authorId;
  }
}

// RIGHT - explicit modelName for reliable detection
class BlogPost {
  static modelName = 'Post';
  constructor(title, authorId) {
    this.title = title;
    this.authorId = authorId;
  }
}
```

## Key Patterns

### React Integration

```tsx
import { createMongoAbility } from '@casl/ability';
import { AbilityProvider, Can, useAbility } from '@casl/react';

// App setup
const ability = createMongoAbility([
  { action: 'read', subject: 'Post' },
  { action: 'create', subject: 'Post' },
]);

export function App() {
  return (
    <AbilityProvider value={ability}>
      <Can I="read" a="Post">
        <PostList />
      </Can>
      <CreateButton />
    </AbilityProvider>
  );
}

// Component usage
function CreateButton() {
  const ability = useAbility();
  return ability.can('create', 'Post') && <button>Create</button>;
}
```

### MongoDB Conditions & Field Restrictions

```javascript
const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

// Conditional permissions
can('read', 'Post', { published: true });
can('update', 'Post', { authorId: user.id });

// Time-based restrictions
cannot('delete', 'Post', {
  createdAt: { $lt: Date.now() - 24 * 60 * 60 * 1000 }
});

// Field-level permissions
can('read', 'Post', ['title', 'content']);
cannot('read', 'Post', 'salary');

// Check field permissions
ability.can('read', post, 'title'); // true/false
```

### Database Integration

```typescript
// Prisma
import { accessibleBy } from '@casl/prisma';

const posts = await prisma.post.findMany({
  where: accessibleBy(ability).ofType('Post')
});

// Mongoose
import { accessibleRecordsPlugin } from '@casl/mongoose';
mongoose.plugin(accessibleRecordsPlugin);

const posts = await Post.accessibleBy(ability, 'read').find();
```

### Error Handling with Reasons

```javascript
// Define rules with reasons
cannot('create', 'Post').because('Subscription required');

// Handle errors
import { ForbiddenError } from '@casl/ability';

try {
  ForbiddenError.from(ability).throwUnlessCan('create', 'Post');
} catch (error) {
  if (error instanceof ForbiddenError) {
    console.log(error.message); // "Subscription required"
  }
}

// Get rule reasons for debugging
const rule = ability.relevantRuleFor('create', 'Post');
console.log(rule.reason);
```

### Permission Updates & Events

```javascript
// Subscribe to ability updates
const unsubscribe = ability.on('updated', ({ rules }) => {
  console.log('Permissions updated:', rules);
});

// Update on login
function updateAbilityOnLogin(user) {
  const { can, rules } = new AbilityBuilder(createMongoAbility);
  
  if (user.role === 'admin') {
    can('manage', 'all');
  } else {
    can('read', 'all');
  }
  
  ability.update(rules);
}
```

## Common Mistakes

- **Testing rules instead of behavior**: Test `ability.can('read', 'Post')` not rule arrays
- **Creating new instances on updates**: Use `ability.update(rules)` instead of `new Ability(rules)`
- **Missing subject type detection**: Add `static modelName` to classes or use `detectSubjectType`
- **Forgetting field parameters**: Use `ability.can('read', subject, 'field')` for field checks
- **Database query conflicts**: Combine `accessibleBy` with other conditions using `$and`

```javascript
// WRONG - testing implementation details
expect(ability.rules).toEqual([{ action: 'read', subject: 'Post' }]);

// RIGHT - testing behavior
expect(ability.can('read', 'Post')).toBe(true);
expect(ability.can('read', privatePost)).toBe(false);
```