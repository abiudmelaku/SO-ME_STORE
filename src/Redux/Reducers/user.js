import {userActionType} from '../actiontypes'
const INITIAL_STATE = {
    currentUser:null
}; 
const userReducer = (currentState = INITIAL_STATE , action) =>{
    switch(action.type){
        case userActionType.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser:action.payload
            }
        default:
            return currentState
    }
}
export default userReducer