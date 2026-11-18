'use strict';
// Lightweight install-time setup: nothing to build, just a compatibility marker.
const fs = require('fs');
const path = require('path');
try {
  fs.writeFileSync(path.join(__dirname, '..', '.build-ok'), String(Date.now()));
} catch (e) { /* read-only fs is fine */ }
console.log('json-rpc-chunker: ready');
