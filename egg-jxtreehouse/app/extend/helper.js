const crypto = require('crypto');

module.exports = {
  hash(text, keys) {
    const hash = crypto.createHmac('sha256', String(keys));
    return hash.update(text).digest('hex');
  }
}