import winston from "winston";

export class Logger {
  private logger: winston.Logger;

  public constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.combine(
        winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.errors({ stack: true })
      ),

      transports: [new winston.transports.Console({
        format: winston.format.printf((info) => {
          return `${info.timestamp} | ${info.level} | ${info.message}`;
        })
      })]
    });
  }

  public debug(message: string): void {
    this.logger.debug(message);
  }
  public info(message: string): void {
    this.logger.info(message);
  }
  public warn(message: string): void {
    this.logger.warn(message);
  }
  public error(message: string): void {
    this.logger.error(message);
  }
}
