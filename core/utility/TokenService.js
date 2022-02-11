const jwt = require("jsonwebtoken");

class TokenService {

    constructor(_privateKey, _options) {
        this.options = _options;
        this.privateKey = _privateKey;
    }

    sign(payload) {
        return jwt.sign(payload, this.privateKey, this.options);
    }
    verify(token) {
        return jwt.verify(token, this.privateKey, this.options);
    }
    decode(token) {
        return jwt.decode(token, { complete: true });
    }
}

module.exports = TokenService;
