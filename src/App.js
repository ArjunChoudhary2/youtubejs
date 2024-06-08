import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
    <div className="">
      <Header />
      <Body/>
    </div>
    </Provider>
  );
};

export default App;
