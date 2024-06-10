import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <Provider store={store}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
};

export default App;
