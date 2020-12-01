const costomers = (state = [], action) => {
    switch (action.type) {
        case "SET_COSTOMERS": {
            const newState = action.payload;
            state = newState;
            return [...state]


        }



        default:
            return state
    }

}

export default costomers