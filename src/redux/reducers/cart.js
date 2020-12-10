const cart = (state = [], action) => {
    switch (action.type) {
        case "ADD_CART": {
            console.log(action.payload);
            let index = state.findIndex(
                (product) => product._id === action.payload._id
            );
            if (index !== -1) {
                state[index].quantity++;
            } else {
                state.push(action.payload)
            }
            return [...state];
        }
        case "DELETE_ALL_CART": {
            return state = [];
        }

        default:
            return state;
    }
};

export default cart;
