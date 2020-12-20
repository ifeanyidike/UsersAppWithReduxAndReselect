import {
    getUsersReducer,
    getUserReducer,
} from "./userReducers"

import {
    getPostsReducer,
    getPostReducer,
} from "./postReducers"

import {
    getCommentsReducer
} from "./commentReducers"
import {combineReducers } from "redux"

export default combineReducers({
    getUsers: getUsersReducer,
    getUser: getUserReducer,
    getPosts: getPostsReducer,
    getPost: getPostReducer,
    getComments: getCommentsReducer
})