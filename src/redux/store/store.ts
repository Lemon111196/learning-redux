import { legacy_createStore as createStore } from "redux";
import todoReducer from "../reducer/reducer";

const store = createStore(
    todoReducer
);

export default store;