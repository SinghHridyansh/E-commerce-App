// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import reducers from "../Redux/Reducers/index";

const store = createStore(reducers, {});

export default store;
