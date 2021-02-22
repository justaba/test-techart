import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Error from "./components/Error";
import Result from "./components/Result";
import { store } from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Калькулятор цены конструкций</h1>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Error />
        <Result />
      </div>
    </Provider>
  );
}

export default App;
