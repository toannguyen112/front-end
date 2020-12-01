const setOrders = (listOrder) => {
    return {
        type: "SET_ORDERS",
        payload: listOrder
    }
}
const deleteOrder = (orderId) => {
    return {
        type: "DELETE_ORDER",
        payload: orderId
    }
}

const confirmOrder = (newOrder) => {
    return {
        type: "CONFIRM_ORDER",
        payload: newOrder
    }
}





export default {
    setOrders,
    deleteOrder,
    confirmOrder
}