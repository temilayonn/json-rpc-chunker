'use strict';

/**
 * Split a string into fixed-size frames suitable for stdio transport.
 * @param {string} str
 * @param {number} maxLen
 * @returns {string[]}
 */
function chunkString(str, maxLen) {
  if (typeof str !== 'string') throw new TypeError('chunkString: expected a string');
  const n = Math.max(1, Math.floor(maxLen));
  const out = [];
  for (let i = 0; i < str.length; i += n) out.push(str.slice(i, i + n));
  return out;
}

/**
 * Serialize an object and split the JSON text into byte-budgeted frames.
 * @param {*} obj
 * @param {number} maxBytes
 * @returns {string[]}
 */
function chunkPayload(obj, maxBytes) {
  const text = typeof obj === 'string' ? obj : JSON.stringify(obj);
  return chunkString(text, maxBytes);
}

/**
 * Reassemble frames produced by chunkPayload/chunkString.
 * @param {string[]} frames
 * @returns {string}
 */
function concatFrames(frames) {
  if (!Array.isArray(frames)) throw new TypeError('concatFrames: expected an array');
  return frames.join('');
}

module.exports = { chunkString, chunkPayload, concatFrames };
