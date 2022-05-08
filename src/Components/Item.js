import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useGlobalCartContext } from "../Hooks/context";

const Item = ({ id, title, img, price, amount }) => {
    const { removeItem, increaseAmount, dereaseAmount } =
        useGlobalCartContext();
    return (
        <div className="content">
            <div className="item mb-4 d-flex justify-content-between p-2 w-100">
                <div className="title d-flex justify-content-start">
                    <img src={img} alt={img} width="150" />
                    <div className="info mt-2">
                        <p>{title}</p>
                        <button
                            className="btn text-danger border-0 p-0"
                            onClick={() => removeItem(id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
                <div className="price mt-2 text-center">
                    <p>${price}</p>
                </div>
                <div className="amount mt-2 d-flex justify-content-end align-items-start">
                    <button
                        className="btn border-0 fs-4  d-flex justify-content-center align-items-start text-primary"
                        onClick={() => dereaseAmount(id)}
                    >
                        <FiChevronLeft />
                    </button>
                    <p className="mt-1 align-self-start">{amount}</p>
                    <button
                        className="btn border-0 fs-4 d-flex justify-content-center align-items-start text-primary"
                        onClick={() => increaseAmount(id)}
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
