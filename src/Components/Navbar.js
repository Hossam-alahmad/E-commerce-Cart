import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useGlobalCartContext } from "../Hooks/context";
const Navbar = () => {
    const { items } = useGlobalCartContext();

    return (
        <div className="navbar ">
            <div className="container">
                <div className="content w-100 d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <a href="/" className="text-decoration-none fs-1">
                            <span>Panda</span>
                        </a>
                    </div>
                    <div className="nav">
                        <p
                            className="cart-icon position-relative fs-4 m-0 text-white"
                            data-value={items.length}
                        >
                            <BsFillCartPlusFill />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
