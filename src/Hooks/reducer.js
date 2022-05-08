export const reducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { ...state, loading: true };
        case "STORE_ITEMS":
            return { ...state, items: action.payload, loading: false };
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case "REMOVE_ALL":
            return { ...state, items: [] };
        case "INCREASE":
            const incResult = state.items.map(item => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
            return { ...state, items: incResult };
        case "DECREASE":
            const decResult = state.items
                .map(item => {
                    if (item.id === action.payload) {
                        return { ...item, amount: item.amount - 1 };
                    }
                    return item;
                })
                .filter(item => item.amount !== 0);
            return { ...state, items: decResult };
        case "GET_TOTAL_AMOUNT":
            let tempTotal = state.items.reduce((totalItem, item) => {
                const { price, amount } = item;
                const itemTotal = price * amount;
                return totalItem + itemTotal;
            }, 0);
            tempTotal = parseFloat(tempTotal.toFixed(2));
            return { ...state, total: tempTotal };
        default:
            return state;
    }
};
