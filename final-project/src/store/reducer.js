

const initialState = {
    tutors: [],
    tutor_num: ''
}

const reducer = (state = initialState, action) => {

    if(action.type === 'FETCH_TUTORS') {
        return {
            ...state,
            tutors: action.payload
        }
    }


    return state
}

export default reducer