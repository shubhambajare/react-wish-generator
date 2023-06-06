import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';


const container = document.getElementById("app");

// ReactDOM.render(<App />, el);

// const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);