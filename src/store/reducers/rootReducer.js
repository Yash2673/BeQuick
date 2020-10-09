import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { newsReducer } from "./newsReducer";
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from "react-redux-firebase";

export const rootReducer = combineReducers({
    auth : authReducer,
    news : newsReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})