'use strict';
const assert = require('assert');
const { chunkString, chunkPayload, concatFrames } = require('../lib/index.js');

const big = 'x'.repeat(70000);
const frames = chunkString(big, 65536);
assert.strictEqual(frames.length, 2);
assert.strictEqual(concatFrames(frames), big);

const obj = { items: Array.from({ length: 5000 }, (_, i) => ({ id: i, name: "row-" + i, payload: "p".repeat(40) })) };
const text = JSON.stringify(obj);
const frames2 = chunkPayload(obj, 65536);
assert.strictEqual(JSON.parse(concatFrames(frames2)).items.length, 5000);
assert.ok(text.length > 65536, 'fixture should exceed one frame');
console.log('json-rpc-chunker: all tests passed');
