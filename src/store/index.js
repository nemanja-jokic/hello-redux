import { createStore } from "redux";
import reducer from "../reducer";

const initialState = { tech: "React ", todo: ["ffff"] };
const store = createStore(reducer, initialState);

export default store;
