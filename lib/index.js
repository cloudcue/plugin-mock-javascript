'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createPlugin = void 0;

const plugin_1 = require('./plugin');
function createPlugin() {
  return new plugin_1.MockPlugin();
}
exports.createPlugin = createPlugin;
