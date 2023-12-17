import { Logger } from "@/utils/log/Logger";

export class LoggerFactory {
  private static logger: Logger;

  public static createLogger(): Logger {
    if (!this.logger) {
      this.logger = new Logger();
    }

    return this.logger;
  }
}
