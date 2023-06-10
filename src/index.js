import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import DisplayMessage from "./components/DisplayMessage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "share/:occasion/:id/:name",
        element: <DisplayMessage />,
    },
]);

createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);