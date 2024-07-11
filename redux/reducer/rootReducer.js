import {combineReducers} from '@reduxjs/toolkit'
import controllerReducer from "../../components/controller/reducer/controller";
import user from "./user";
import requests from "./requests";
import app from "./application";

const rootReducer = combineReducers({
  controllerReducer,
  [requests.name]: requests.reducer,
  [user.name]: user.reducer,
  [app.name]: app.reducer,
});


export default rootReducer;
