- **Demo**: [Demo Link](https://codesandbox.io/p/sandbox/lru-cache-visualizer-rw9rz3)

# `use-lru-cache`

A React hook for managing an LRUCache (Least Recently Used Cache) in your React components.

## Installation

```bash
npm install use-lru-cache

# Usage

```markdown
```tsx
import React from 'react';
import { useLRUCache } from 'use-lru-cache';

const MyComponent: React.FC = () => {
  // Initialize an LRUCache with a capacity of 10 for numbers
  const cache = useLRUCache<number>(10);

  // Use the cache methods
  const cachedValue = cache.get('someKey');
  cache.put('someKey', 42);
  const cachedKeys = cache.getCachedData();

  return (
    <div>
      <p>Cached Value: {cachedValue}</p>
      {/* Render other components or UI elements */}
    </div>
  );
};

export default MyComponent;



#### Replace 'someKey' and 42 with your actual data and keys. Adjust the generic type parameter <T> based on the type of data you want to store in the cache.

- **Package Link**: [`use-lru-cache` on npm](https://www.npmjs.com/package/use-lru-cache)
- **Contributor**: [uuvedant4](https://github.com/uuvedant4)


