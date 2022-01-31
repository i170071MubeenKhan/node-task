const { createLogger, format, transports } = require("winston");

const myFormat = format.combine(format.timestamp(), format.json());

const logConfiguration = {
  level: "debug",
  format: myFormat,
  defaultMeta: { service: "user-service" },
  transports: [
    // writing logs on console
    //new transports.Console(/*{ level: "info" }*/),
    // writing logs on file (appends)
    new transports.File({ filename: "api.log" }),
  ],
};

const logger = createLogger(logConfiguration);

exports.logger = logger;
