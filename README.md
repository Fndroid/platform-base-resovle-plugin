## What is this

resolve modules with `process.platform`

```
src
 ├── service_darwin.js
 ├── service_win32.js
```

```js
const service = require("/src/service$");
```

## How to use

webpack.config.js

```js
const { PlatformResolvePlugin } = require("platform-base-resovle-plugin");

const config = {
  // ...

  resolve: {
    plugins: [new PlatformResolvePlugin()],
  },
};
```
