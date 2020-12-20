import{
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAIL,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAIL,
} from "../constants/constants"

const initialState = {
    loading: false,
    users: []
}

export const getUsersReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true,                
            }
        
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload
            }
        
        case FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default: 
            return state
    }
}


export const getUserReducer = (state = {loading: false, user: { data: []}}, action) =>{
    switch(action.type){
        case FETCH_USER_REQUEST:
             return{
                ...state,
                loading: true,                
            }
        
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                user: action.payload
            }
        
        case FETCH_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        
        default: 
            return state
    }
}

