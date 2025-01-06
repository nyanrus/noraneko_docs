---
title: Hot Module Replacement
description: Development Techs
---

Noraneko can use Vite's HMR to take advantage of hot swapping.
The main use case for HMR is Solid.js, but the official Solid.js HMR functionality is unstable for handling XUL, so you must manually specify that HMR is supported.

Please write as follows

```ts
@noraComponent(import.meta.hot)
export default class FooBar extends NoraComponentBase {
  init() {
    ... // render, onCleanup, createSignal, etc. that needs Root of solid-js
  }
}
```

or

```ts
const foobar = createRootHMR(... /* render, onCleanup, createSignal, etc. */,import.meta.hot);
```

`@noraComponent` marks the file as HMR capable code. \
If you have imported a code in a file that has been marked as an HMR-capable code, when you change the code, it will automatically go back to the HMR-capable code and perform HMR.

For example, if bar.ts imported with foo.ts (already registered in import.meta.hot) is changed, it will be treated as an HMR for foo.ts.

If you change a code that does not support HMR, a reload will be applied. Please note that the browser will not be restarted, but open pages, etc. will be deleted. 
