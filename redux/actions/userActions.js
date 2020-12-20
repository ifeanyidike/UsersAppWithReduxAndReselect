import axios from "axios"
import { 
        FETCH_USERS_FAIL, 
        FETCH_USERS_REQUEST, 
        FETCH_USERS_SUCCESS, 
        FETCH_USER_FAIL, 
        FETCH_USER_REQUEST,
        FETCH_USER_SUCCESS
} from "../constants/constants"
import {app_id_1, app_id_2, app_id_3} from "../../config"

const usersEndpoint = 'https://dummyapi.io/data/api/user'
const userEndpoint = 'https://dummyapi.io/data/api/user/'

export const listAllUsers = (limit = 10, page=1) => async(dispatch) => {
    try {
        dispatch({
            type: FETCH_USERS_REQUEST
        })
        
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'app-id': app_id_3
            }
        }
        
        const { data } = await axios.get(`${usersEndpoint}?limit=${limit}&page=${page}`, 
                                config)
        
        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: FETCH_USERS_FAIL,
            payload: error.message
        })
    }
}


export const getUserProfile = (id) => async(dispatch) => {
    try {
        dispatch({
            type: FETCH_USER_REQUEST
        })
        
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'app-id': app_id_3
            }
        }
        
        const { data } = await axios.get(`${userEndpoint}${id}`, config)
        
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: FETCH_USER_FAIL,
            payload: error.message
        })
    }
}




