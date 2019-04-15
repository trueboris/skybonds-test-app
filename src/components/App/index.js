import React from "react";
import ISINInput from "../ISINInput";
import BondInfo from "../BondInfo";
import ChartCard from "../ChartCard";
import "./app.css";
import "antd/dist/antd.css";

const App = () => (
  <div className="app">
    <ISINInput />
    <BondInfo />
    <ChartCard />
  </div>
);

export default App;
