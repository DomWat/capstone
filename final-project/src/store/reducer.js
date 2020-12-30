

const initialState = {
    tutors: [],
    tutor_num: '',
    isAuthenticated: false,
}

const reducer = (state = initialState, action) => {

    if(action.type === 'FETCH_TUTORS') {
        return {
            ...state,
            tutors: action.payload
        }
    }

    if(action.type === 'ON_AUTH') {
        return {
            ...state,
            isAuthenticated: true
        }
    }

    return state
    
}


export default reducer