const orders = (state = [], action) => {
    switch (action.type) {
        case "SET_ORDERS": {
            const newState = action.payload;
            state = newState;
            return [...state];
        }
        case "DELETE_ORDER": {
            const orderId = action.payload;
            const newState = state.filter((prod) => prod._id !== orderId);
            return [...newState];
        }

        case "CONFIRM_ORDER": {
            const confirmOder = action.payload;
            const order = state.filter((order) => order._id === confirmOder);
            order[0].active = true;
            return [...state];
        }

        default:
            return state;
    }
};

export default orders;
