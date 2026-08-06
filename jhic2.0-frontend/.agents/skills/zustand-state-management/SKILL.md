---
name: zustand-state-management
description: Optimal Zustand state management patterns for React applications. Use when building scalable state architecture, optimizing re-renders, handling complex async operations, or implementing advanced store patterns with middleware composition.
---

# Zustand State Management

Modern state management for React with minimal boilerplate and maximum flexibility.

## When to Apply

- Building complex React applications requiring global state
- Optimizing component re-renders and performance
- Implementing async data fetching with proper state updates
- Creating modular state architecture with slice patterns
- Setting up development debugging with Redux DevTools

## Critical Rules

**Use Selectors to Prevent Re-renders**: Components subscribing to entire store re-render on every state change

```jsx
// WRONG - re-renders on any state change
const { bears, fishes } = useStore()

// RIGHT - only re-renders when bears changes
const bears = useStore(state => state.bears)
```

**Apply useShallow for Multiple Selections**: Selecting multiple properties causes unnecessary re-renders

```jsx
// WRONG - creates new object reference each time
const { nuts, honey } = useStore(state => ({ nuts: state.nuts, honey: state.honey }))

// RIGHT - shallow comparison prevents re-renders
const { nuts, honey } = useStore(
  useShallow(state => ({ nuts: state.nuts, honey: state.honey }))
)
```

**Middleware Order Matters**: Devtools must be outermost wrapper to preserve type information

```jsx
// WRONG - loses devtools functionality
immer(devtools(stateCreator))

// RIGHT - devtools processes setState mutations correctly
devtools(immer(stateCreator))
```

## Key Patterns

### Basic Store Creation

```jsx
import { create } from 'zustand'

const useStore = create((set, get) => ({
  bears: 0,
  fishes: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  removeAllFish: () => set({ fishes: 0 }),
  total: () => get().bears + get().fishes
}))
```

### Async Actions with Error Handling

```jsx
const useStore = create((set) => ({
  users: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null })
    try {
      const response = await fetch('/api/users')
      const users = await response.json()
      set({ users, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  }
}))
```

### Immer for Complex State Updates

```jsx
import { immer } from 'zustand/middleware/immer'

const useStore = create(immer((set) => ({
  person: { name: 'John', address: { city: 'NYC', zip: '10001' } },
  updateCity: (newCity) => set((state) => {
    state.person.address.city = newCity
  })
})))
```

### Devtools Integration

```jsx
import { devtools } from 'zustand/middleware'

const useStore = create(devtools((set) => ({
  count: 0,
  increment: () => set(
    state => ({ count: state.count + 1 }), 
    undefined, 
    'counter/increment'
  )
})))
```

### Slices Pattern for Large Stores

```jsx
const createBearSlice = (set, get) => ({
  bears: 0,
  addBear: () => set(state => ({ bears: state.bears + 1 })),
  eatFish: () => set(state => ({ fishes: state.fishes - 1 }))
})

const createFishSlice = (set, get) => ({
  fishes: 0,
  addFish: () => set(state => ({ fishes: state.fishes + 1 }))
})

const useStore = create((set, get) => ({
  ...createBearSlice(set, get),
  ...createFishSlice(set, get)
}))
```

### Scoped Stores with Context

```jsx
import { createStore, useStore } from 'zustand'
import { createContext, useContext } from 'react'

const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
  const [store] = useState(() => createStore((set) => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 }))
  })))
  
  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  )
}

const useStoreContext = (selector) => {
  const store = useContext(StoreContext)
  return useStore(store, selector)
}
```

### Persist with localStorage

```jsx
import { persist } from 'zustand/middleware'

const useStore = create(persist(
  (set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme })
  }),
  { name: 'app-settings' }
))
```

### Subscribe to Specific Changes

```jsx
import { subscribeWithSelector } from 'zustand/middleware'

const useStore = create(subscribeWithSelector((set) => ({
  user: null,
  posts: [],
  setUser: (user) => set({ user })
})))

// Subscribe to user changes only
useStore.subscribe(
  state => state.user,
  (user, prevUser) => {
    console.log('User changed:', { user, prevUser })
  }
)
```

## Common Mistakes

- **Selecting entire store**: Use specific selectors to prevent unnecessary re-renders
- **Not using useShallow**: Multiple property selections need shallow comparison
- **Wrong middleware order**: Always put devtools as outermost wrapper
- **Missing Immer rules**: Class objects need `[immerable] = true` for proper mutation detection
- **Forgetting async error states**: Always handle loading and error states in async actions