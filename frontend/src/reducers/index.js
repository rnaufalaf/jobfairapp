import { combineReducers } from "redux";
import userReducers from "./userReducers";
import jobReducers from "./jobReducers";

export default combineReducers({ userReducers, jobReducers });
