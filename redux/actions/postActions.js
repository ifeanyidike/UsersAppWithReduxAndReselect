import axios from "axios"
import { 
    FETCH_POSTS_FAIL,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POST_FAIL,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,      
} from "../constants/constants"
import {app_id_1, app_id_2, app_id_3} from "../../config"

const userEndpoint = 'https://dummyapi.io/data/api/user/'
const postsEndpoint = 'https://dummyapi.io/data/api/post'


export const listAllPosts = (limit) => async(dispatch) => {
    try {
        dispatch({
            type: FETCH_POSTS_REQUEST
        })
        
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'app-id': app_id_3
            }
        }
        
        const { data } = await axios.get(postsEndpoint + `?limit=${limit}`, config)
        
        dispatch({
            type: FETCH_POSTS_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: FETCH_POSTS_FAIL,
            payload: error.message
        })
    }
}



export const listUserPosts = (id) => async(dispatch) => {
    try {
        dispatch({
            type: FETCH_POST_REQUEST
        })
        
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'app-id': app_id_3
            }
        }
        
        const { data } = await axios.get(`${userEndpoint}${id}/post?limit=100`, config)
        
        dispatch({
            type: FETCH_POST_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: FETCH_POST_FAIL,
            payload: error.message
        })
    }
}


