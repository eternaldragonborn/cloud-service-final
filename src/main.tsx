import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Charts } from "./Charts";
import { StatisticsTable } from "./Table";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Charts />} />
          <Route path="table" element={<StatisticsTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
