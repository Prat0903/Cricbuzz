import { useState } from "react";
import { createContext } from "react";
import { io } from "socket.io-client";
import { API_URL } from "../utils/env";

// eslint-disable-next-line react-refresh/only-export-components
export let SocketContext = createContext(null);

const SocketContextWrapper = ({ children }) => {
  let [socket] = useState(io(API_URL));

  socket.on("connected", () => {
    console.log("Server connected");
  });

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextWrapper;
