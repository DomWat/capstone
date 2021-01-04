const initialState = {
  tutors: [],
  tutor_num: "",
  isAuthenticated: false,
  userType: "",
};

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
    if(action.type === "ON_LOGOUT") {
        return {
            ...state,
            isAuthenticated: false
        }
    }

    if (action.type === "TUTOR_LOGIN") {
        return {
            ...state,
            userType:'/tutor-profile'
        }
    }
    
    if (action.type === "STUDENT_LOGIN") {
        return {
            ...state,
            userType: '/profile'
        }
    } 
    return state;
    
}


export default reducer
