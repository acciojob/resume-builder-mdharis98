const intialState = {
    skill: ""
}
const skillsReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_SKILL':
            return { ...state, skill: action.skill }
        default:
            return state
    }
}

export default skillsReducer