# ***useLRUCache🪝: We are stable now 😃***

A React hook for managing an LRUCache (Least Recently Used Cache) in your React components.

### Installation

```bash
npm install use-lru-cache
```

### Usage

```typescript
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
```

> ***Note: Replace `someKey` and `42` with your actual data and keys. Adjust the generic type parameter <T> based on the type of data you want to store in the cache.***

-----------------------------------------

**Example**: <a target="_blank" href="https://use-lru-cache.vercel.app/">Link</a>

**Package Link**: [*use-lru-cache* on npm](https://www.npmjs.com/package/use-lru-cache)

-----------------------------------------

#### **Contributors**
<a href="https://github.com/uuvedant4/use-lru-cache/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=uuvedant4/use-lru-cache" />
</a>
