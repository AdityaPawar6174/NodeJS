// log profiling
// It is the process of collecting and analyzing log data to understand the performance and behavior of an application.
// Profiling logs help identify bottlenecks, errors, and other issues that may affect the application's performance.

require("./loggers");
const winston = require("winston");
const paymentLogger = winston.loggers.get("paymentLogger");

let requestHandler = (path) => {
  const profiler = paymentLogger.startTimer();

  for (let i = 0; i < 100000; i++) {
    j = i * 3;
  }

  profiler.done({ message: `Request to ${path} is processed` });
};

module.exports = requestHandler;
