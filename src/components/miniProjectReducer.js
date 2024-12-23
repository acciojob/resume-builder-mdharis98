const intialState = {
    projectName: "",
    techStack: "",
    description: ""
}
const miniprojectReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'PROJECT_NAME':
            return { ...state, projectName: action.payload };
        case 'TECH_STACK':
            return { ...state, techStack: action.payload };
        case 'DESCRIPTION':
            return { ...state, description: action.payload };
        default:
            return state;
    }
}

export default miniprojectReducer