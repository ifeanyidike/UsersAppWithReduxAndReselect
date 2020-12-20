import axios from "axios"
import { 
    FETCH_COMMENTS_FAIL,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,    
} from "../constants/constants"
import {app_id_1, app_id_2, app_id_3} from "../../config"

const postsEndpoint = 'https://dummyapi.io/data/api/post'

export const listPostComments = (id) => async(dispatch) => {
    try {
        dispatch({
            type: FETCH_COMMENTS_REQUEST
        })
        
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'app-id': app_id_3
            }
        }
        
        const { data } = await axios.get(`${postsEndpoint}/${id}/comment?limit=100`, config)
        
        dispatch({
            type: FETCH_COMMENTS_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: FETCH_COMMENTS_FAIL,
            payload: error.message
        })
    }
}