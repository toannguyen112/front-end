const products = (state = [], action) => {
    switch (action.type) {
        case "SET_PRODUCTS": {
            const newState = action.payload;
            state = newState;
            return [...state];
        }
        case "ADD_PRODUCT": {
            const product = action.payload;
            return [...state, product];
        }
        case "DELETE_PRODUCT": {
            const productId = action.payload;
            const newState = state.filter((prod) => prod._id !== productId);
            return [...newState];
        }
        case "DELETE_ALL_PRODUCT": {
            const newState = [];
            return [...newState];
        }

        default:
            return state;
    }
};

export default products;
