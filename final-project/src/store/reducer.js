const initialState = {
  tutors: [],
  tutor_num: "",
  isAuthenticated: false,
  userType: "",
  findTutorDisplay: true
};

const reducer = (state = initialState, action) => {

    if(action.type === 'FETCH_TUTORS') {
        return {
            ...state,
            tutors: action.payload
        }
    }

    if(action.type === 'ON_AUTH') {
        const profile = localStorage.getItem('profile') || ''
        return {
          ...state,
          isAuthenticated: true,
          userType: profile,
          findTutorDisplay: !profile.includes('tutor')
        };
    }

    if(action.type === "ON_LOGOUT") {
        localStorage.removeItem("profile");
        return {
          ...state,
          isAuthenticated: false,
          findTutorDisplay: true,
        };
    }

    if (action.type === "TUTOR_LOGIN") {
        localStorage.setItem('profile', '/tutor-profile')
        return {
            ...state,
            userType:'/tutor-profile',
            findTutorDisplay: false
        }
    }
    
    if (action.type === "STUDENT_LOGIN") {
        localStorage.setItem("profile", "/profile");
        return {
            ...state,
            userType: '/profile',
            findTutorDisplay: true
        }
    } 
    return state;
    
}


export default reducer
