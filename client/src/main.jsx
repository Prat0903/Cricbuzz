import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/queryClient";
import store from "./lib/store";
import { Provider } from "react-redux";
import SocketContextWrapper from "./context/SocketContext";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <SocketContextWrapper>
        <RouterProvider router={router} />
      </SocketContextWrapper>
    </Provider>
  </QueryClientProvider>,
);
