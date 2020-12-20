import{
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAIL
} from "../constants/constants"


export const getCommentsReducer = (state = {loading: false, comments: { }}, action) =>{
    switch(action.type){
        case FETCH_COMMENTS_REQUEST:
             return{
                ...state,
                loading: true,                
            }
        
        case FETCH_COMMENTS_SUCCESS:
            return{
                ...state,
                loading: false,
                comments: action.payload
            }
        
        case FETCH_COMMENTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default: 
            return state
    }
}