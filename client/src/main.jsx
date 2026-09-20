import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/queryClient";
import store from "./lib/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </QueryClientProvider>,
);
