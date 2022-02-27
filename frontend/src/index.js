import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ChatProvider from "./context/chatProvider";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.render(
  // <React.StrictMode>
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
    {/* // </React.StrictMode> */}
  </ChakraProvider>,
  document.getElementById("root")
);