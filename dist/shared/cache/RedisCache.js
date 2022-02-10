"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ioredis = _interopRequireDefault(require("ioredis"));

var _cache = _interopRequireDefault(require("../../config/cache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CacheConfig {
  constructor() {
    this.client = void 0;
    this.client = new _ioredis.default(_cache.default.config.redis);
  }

  async recover(key) {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }

    const parsedData = JSON.parse(data);
    return parsedData;
  }

  async save(key, value) {
    await this.client.set(key, JSON.stringify(value));
  }

  async invalidate(key) {
    await this.client.del(key);
  }

}

exports.default = CacheConfig;