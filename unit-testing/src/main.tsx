import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { MyAwesomeApp } from "./MyAwesomeApp.tsx";
import FirstStepsApp from "./FirstStepsApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <MyAwesomeApp /> */}
    <FirstStepsApp />
  </StrictMode>
);
