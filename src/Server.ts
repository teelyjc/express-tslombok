import express from "express";
import cors from "cors";

import http from "http";

import { Logger } from "@/utils/log/Logger";
import { LoggerFactory } from "@/utils/log/LoggerFactory";

import { Getter, Setter } from "tslombok";

export class Server {
  private readonly logger: Logger = LoggerFactory.createLogger();

  private readonly app: express.Express;
  private readonly server: http.Server;

  private readonly port: number = 4000;
  private readonly hostname: string = "0.0.0.0";

  @Setter
  @Getter
  private corsOptions: cors.CorsOptions = {};

  public constructor() {
    this.logger.info("Server is starting..");
    this.app = express();
    this.server = http.createServer(this.app);

    this.app
      .use(cors(this.corsOptions))
      .use(express.json())
      .use(express.urlencoded({ extended: true }));

    this.server.on("listening", this.onListen.bind(this));

    process.on("SIGTERM", this.stop.bind(this, this.server));
    process.on("SIGINT", this.stop.bind(this, this.server));
  }

  public start() {
    this.server.listen(this.port, this.hostname);
  }

  public stop(server: http.Server) {
    this.logger.info("Stopping Server..");
    server.close(() => this.onStop());
  }

  private onListen(): void {
    this.logger.info(`Server is listening on ${this.hostname}:${this.port} !`);
    if (process.env.NODE_ENV !== "production") {
      this.logger.warn("Server is not running in production mode.");
    }
    this.logger.info("Press CTRL-C to exit.");
  }

  private onStop(): void {
    this.logger.info("Stopped Server!");
  }

  public getServer(): http.Server {
    return this.server;
  }
}
