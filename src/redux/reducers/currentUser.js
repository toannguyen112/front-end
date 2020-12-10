const currentUser = (state = {}, action) => {
    switch (action.type) {
        case "SET_USER": {
            const newState = action.payload;
            state = newState;
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
            return { ...state };
        }

        case "LOG_OUT":
            return (state = null);
        default:
            return state;
    }
};

export default currentUser;
