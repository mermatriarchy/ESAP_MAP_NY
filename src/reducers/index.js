import { combineReducers } from 'redux';
import GoogleMap from "./GoogleMap";
import About from "./About";

export default combineReducers({
  about: About,
  map: GoogleMap,
});