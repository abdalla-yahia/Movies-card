import { createStore } from "redux";
import reducer from "./Reducers";

const Store = createStore(reducer)

export default Store;