const intialstate = {
    courseName: "",
    completionYear: "",
    college: "",
    percentage: "",
}
const educationReducer = (state = intialstate, action) => {
    switch (action.type) {
        case 'UPDATE_COURSENAME':
            return { ...state, courseName: action.payload }
        case 'UPDATE_COMPLETIONYEAR':
            return { ...state, completionYear: action.payload }
        case 'UPDATE_COLLEGE':
            return { ...state, college: action.payload }
        case 'UPDATE_PERCENTAGE':
            return { ...state, percentage: action.payload }
        default:
            return state
    }

}

export default educationReducer