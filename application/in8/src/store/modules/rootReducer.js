import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../../services/history";

import home from "./home/reducers";

export default combineReducers({
  home,
  router: connectRouter(history),
});
