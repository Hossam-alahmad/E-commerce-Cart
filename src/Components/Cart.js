import React from "react";
import { useGlobalCartContext } from "../Hooks/context";
import Item from "./Item";
import Loading from "./Loading";
const Cart = () => {
    const { items, total, loading, removeAll } = useGlobalCartContext();

    return (
        <div className="cart pt-4 pb-4">
            <div className="container position-relative">
                <div className="title text-center mb-4">
                    <h1>Cart App</h1>
                    <p className="fs-4">This is cart app demo using react js</p>
                </div>
                {loading ? (
                    <Loading />
                ) : items.length ? (
                    <>
                        <div className="content">
                            {items.map((item, index) => (
                                <Item key={item.id} index={index} {...item} />
                            ))}
                            <div className="clear-box text-center">
                                <button
                                    className="clear-items bg-danger text-white border-0 rounded p-2 w-25"
                                    onClick={removeAll}
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                        <hr />
                        <div className="p-2 total d-flex justify-content-between align-items-center">
                            <h2>Total Amount:</h2>
                            <h3>${total}</h3>
                        </div>
                    </>
                ) : (
                    <p className="text-center fs-4 alert-danger p-2">
                        Oops! your cart is empty.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Cart;
