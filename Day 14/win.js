require("./loggers")
const winston = require('winston');
const paymentLogger = winston.loggers.get('paymentLogger');
const orderLogger = winston.loggers.get('orderLogger');

// paymentLogger.info('Payment Received');
// orderLogger.error('Order is not Placed');


// log profiling
const requestHandler = require('./logProfiling');
requestHandler("/api/payment");