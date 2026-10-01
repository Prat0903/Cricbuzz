import logger from "../config/logger.js";

let ioInstance = null;

export function initSocket(io) {
  ioInstance = io;

  io.on("connection", (socket) => {
    logger.info("A user connected");
    socket.emit("connected");
  });
}
