import { Server } from "@/Server";

const server = new Server();

server.setCorsOptions({ origin: true, credentials: true });
server.setPort(5000);
server.setHostname("0.0.0.0");

server.start();
