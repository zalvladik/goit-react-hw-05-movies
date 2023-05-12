import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter basename='/zalvladik'>
      <App/>
      <ToastContainer/>
    </BrowserRouter>
  </StrictMode>
);
