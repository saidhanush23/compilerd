// routes/index.js
const express = require('express');
const router = express.Router();

const codeRouter = require('./routers/code.router');

router.use('/api', codeRouter); // Assuming codeRouter handles routes starting with '/api'

module.exports = router;
