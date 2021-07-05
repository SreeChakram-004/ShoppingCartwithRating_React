import { StrictMode } from "react";
import ReactDOM from "react-dom";
import CustomizedRating from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CustomizedRating />
  </StrictMode>,
  rootElement
);
