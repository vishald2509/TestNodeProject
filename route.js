const path = require("path");
const express = require("express");
const TokenService = require('./core/utility/TokenService');
const config = require("./config/Index");
const router = express.Router();

router.get("/index", (req, res) => {
    const baseUrl = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`;
    res.render('template/index', {
        baseUrl: 'http://localhost:5000',
        webSocketUrl: 'wss://mml9ee62te.execute-api.ap-south-1.amazonaws.com/dev',
      });
});

router.get("/broadcast", (req, res) => {
    const baseUrl = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`;
    res.render('template/broadcast', {
        baseUrl: 'http://localhost:5000',
      });
});

router.get("/token", (req, res) => {
    const { query: { email = "", application = "" } } = req;

    const tokenService = new TokenService(
        "123456",
        {
            issuer: "byjus.com",
            expiresIn: 1 * 6000,
            algorithm: "HS256"
        }    
    );

    const token = tokenService.sign({
        email, application
    });
    res.json({
        token
    });
});
module.exports = router;


