import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
    items: [],
    loading: false,
    total: 0,
};
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const removeItem = id => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };
    const getTotalAmount = () => {
        dispatch({ type: "GET_TOTAL_AMOUNT" });
    };
    const increaseAmount = id => {
        dispatch({ type: "INCREASE", payload: id });
    };
    const dereaseAmount = id => {
        dispatch({ type: "DECREASE", payload: id });
    };
    const removeAll = () => {
        dispatch({ type: "REMOVE_ALL" });
    };
    // fetch item from api
    const fetchData = async () => {
        try {
            dispatch({ type: "LOADING" });
            const response = await fetch(url);
            const cart = await response.json();
            setTimeout(() => {
                dispatch({ type: "STORE_ITEMS", payload: cart });
            }, 1500);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => getTotalAmount(), [state.items]);
    // invoke it in useEffect
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <AppContext.Provider
            value={{
                ...state,
                removeItem,
                increaseAmount,
                dereaseAmount,
                removeAll,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalCartContext = () => {
    return useContext(AppContext);
};
