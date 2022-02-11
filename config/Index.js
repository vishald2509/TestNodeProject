// All configurations will extend these options
// ============================================

const configFactory = {
  apiName: "Websocket-Server",
  env: process.env.NODE_ENV,
  // Server port
  port: process.env.PORT,

  // Server protocol
  protocol: process.env.PROTOCOL,

  // Server host
  host: process.env.HOST,

  // Server IP
  ip: process.env.IP,

  // Domain (e.g. https://localhost)
  domain: process.env.DOMAIN,
  
  // Lifetime for session
  token: {
    options: {
      issuer: "byjus.com",
      expiresIn: 1 * 6000,
      algorithm: "HS256"
    },
    privateKey: 123456
  },
};


module.exports.configFactory = configFactory;