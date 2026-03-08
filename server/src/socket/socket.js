import { Server } from "socket.io";

export const onlineUsers = new Map();
let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: ["http://localhost:3000", "http://vector-lac.vercel.app", "https://vector-lac.vercel.app", process.env.FRONTEND_URL],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {

    socket.on("register", (userId) => {
      onlineUsers.set(userId, socket.id);
    });

    socket.on("disconnect", () => {
      for (const [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
        }
      }
    });

  });
};

export const getIO = () => {
  if (!io) throw new Error("Socket.io not initialized");
  return io;
};