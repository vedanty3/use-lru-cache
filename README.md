## ****useLRUCache🪝****

A React hook for managing an LRUCache (Least Recently Used Cache) in your React components.

### Installation

```bash
npm install use-lru-cache
```

### Usage

```typescript
import React from "react";
import { useLRUCache } from "use-lru-cache";

type T = number;

const App: React.FC = () => {
  // Initialize an LRUCache with a capacity of 10 for numbers
  // It will hold a value of type number against keys
  const { get, put, getCachedData, clearCache } = useLRUCache<T>(10);

  const cachedValue = get("someKey"); // returns corresponding value if key is present else null.
  put("someKey", 42); // set key as "someKey" and corresponding value will be 42
  const cachedKeys = getCachedData(); // will return an array of all present keys

  return (
    <div>
      <p>Cached Value: {cachedValue}</p>
      {/* Render other components or UI elements */}
    </div>
  );
};

export default MyComponent;
```

> _Note: Replace `someKey` and `42` with your actual key and data. Adjust the generic type parameter <T> based on the type of data you want to store in the cache corresponding to your key. A key can be a number or string._

###### _Example: [use-lru-cache.vercel.app](https://use-lru-cache.vercel.app)_

###### _Checkout `use-lru-cache` on [npm](https://www.npmjs.com/package/use-lru-cache)_

###### _Contributors_

<div style="text-align: center; background-color: #f8f9fa; padding: 20px; border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); display: inline-block;">
  <a href="https://github.com/uuvedant4/use-lru-cache/graphs/contributors" style="text-decoration: none;">
    <img src="https://contrib.rocks/image?repo=uuvedant4/use-lru-cache" style="width: 50px; height: auto; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
  </a>
</div>
