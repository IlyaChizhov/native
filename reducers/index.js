export default (state = [], action) => {
    switch (action.type) {
        case 'SET_NAME':
            console.log(action)
            return { ...state, name: action.payload }
        default:
            return state
    }
};