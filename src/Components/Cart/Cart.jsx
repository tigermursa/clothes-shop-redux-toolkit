import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/CartSlice";
import { AiOutlineDelete } from "react-icons/ai";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="overflow-x-auto p-4">
      <table className="table">
        {/* head */}
        {cartProducts.length > 0 ? (
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th className="hidden md:block">Price</th>
              <th className="hidden md:block">Category</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
        ) : (
          <tbody>
            <tr>
              <td colSpan="7">No items in the cart.</td>
            </tr>
          </tbody>
        )}

        <tbody>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{product.title}</td>
              <td className="hidden md:block">{product.price}</td>
              <td className="hidden md:block">{product.category}</td>
              <td className="text-center">{product.quantity}</td>
              <td>{product.quantity * product.price}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline"
                  onClick={() => removeToCart(product.id)}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
