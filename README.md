# json-rpc-chunker

Split large JSON-RPC responses into stdio-safe frames and reassemble them on the receiving side.

## Install

    npm install json-rpc-chunker
    # or, from git:
    npm install <user>/<repo>

## Usage

```js
const { chunkPayload, concatFrames } = require('json-rpc-chunker');

const frames = chunkPayload(bigResponse, 65536); // 64KB frames
const original = concatFrames(frames);
```

MIT
