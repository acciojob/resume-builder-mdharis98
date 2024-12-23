const intialState = {
    fname: "",
    lname: "",
    phone: "",
    address: "",
}
const profileReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'UPDATE_FIRSTNAME':
            return { ...state, fname: action.payload }
        case 'UPDATE_LASTNAME':
            return { ...state, lname: action.payload }
        case 'UPDATE_PHONE':
            return { ...state, phone: action.payload }
        case 'UPDATE_ADDRESS':
            return { ...state, address: action.payload }
        default:
            return state
    }
}

export default profileReducer