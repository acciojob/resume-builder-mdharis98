const intialState = {
    Social: ""
}
const socialReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_SOCIAL_LINKS':
            return { ...state, Social: action.payload };
        default:
            return state;
    }
}

export default socialReducer