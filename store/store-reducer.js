import {combineReducers, createStore} from "redux";
import chatReducer from "./chat-reducer";
import messageReducer from "./message-reducer";

let reducers = combineReducers({
    chatPage: chatReducer,
    messagePage: messageReducer
});

let store = createStore(reducers);

window.store = store;

export default store;