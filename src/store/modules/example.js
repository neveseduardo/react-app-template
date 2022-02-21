
const inicialState = {
    count: 0
}

const ExampleListReducer = (state = inicialState, action) => {
    switch (action.type) {
        case "ADD_EXAMPLE":
            return {
                ...state,
                count: state.count++
            };
        case "REMOVE_EXAMPLE":
            return {
                ...state,
                count: state.count--
            };
        default:
            return state
    }
};

export default ExampleListReducer