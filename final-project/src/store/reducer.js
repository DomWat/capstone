

const initialState = {
    // tutors: []
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {
  
    if(action.type == 'ON_AUTH') {
        return {
            ...state,
            isAuthenticated: true
        }
    }
    
    return state

}

export default reducer