import{
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAIL,
} from "../constants/constants"


export const getPostsReducer = (state = {loading: false, posts:[] }, action) =>{
    switch(action.type){
        case FETCH_POSTS_REQUEST:
             return{
                ...state,
                loading: true,                
            }
        
        case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                loading: false,
                posts: action.payload
            }
        
        case FETCH_POSTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default: 
            return state
    }
}


export const getPostReducer = (state = {loading: false, post: { }}, action) =>{
    switch(action.type){
        case FETCH_POST_REQUEST:
             return{
                ...state,
                loading: true,                
            }
        
        case FETCH_POST_SUCCESS:
            return{
                ...state,
                loading: false,
                post: action.payload
            }
        
        case FETCH_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default: 
            return state
    }
}

