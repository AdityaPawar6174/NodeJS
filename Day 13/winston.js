// Import the Winston logging library
const winston = require('winston'); 
const {combine, timestamp, printf, json} = winston.format

const requestLog = {method:"GET", isAuthenticated:false};

const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    // format:combine(timestamp(), printf((info) => `${info.timestamp},${info.level},${info.message}`)),
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename:'win1.log'})
    ]
})

const childLogger = logger.child(requestLog);

childLogger.info('An info log');
childLogger.error('An error log');