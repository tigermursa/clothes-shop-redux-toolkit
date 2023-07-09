import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div>
      <div className="navbar bg-pink-100">
        <div className="flex-1">
          <NavLink
            to={"/"}
            className="btn btn-ghost normal-case text-2xl font-extrabold"
          >
            Cloth Shop
          </NavLink>
        </div>
        <div className="flex-none me-2 md:me-20">
          <NavLink className="font-bold me-5" to={"/about"}>About</NavLink>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <NavLink to={"/cart"}>
                {" "}
                <div className="indicator">
                  <FiShoppingBag className="text-3xl" />
                  <span className="badge badge-sm indicator-item bg-red-400 text-white ">
                    {cartProducts.length}
                  </span>
                </div>
              </NavLink>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
