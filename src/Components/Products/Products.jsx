import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/CartSlice";
import { getProducts } from "../../store/ProductSlice";
const Products = () => {
  const dispatch = useDispatch();

  const { data: products } = useSelector((state) => state.products);

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data))
    //   .catch((error) => console.error(error));

    dispatch(getProducts());
  }, [dispatch]);

  const generateRatingStars = (rating) => {
    const roundedRating = Math.round(rating);
    const starComponents = [];

    for (let i = 0; i < roundedRating; i++) {
      starComponents.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-current text-yellow-500"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 16.569l-6.276 3.246 1.2-6.987L.285 7.185l6.978-.997L10 .631l3.737 5.557 6.978.997-4.64 4.643 1.2 6.987z"
            clipRule="evenodd"
          />
        </svg>
      );
    }

    return starComponents;
  };

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {products.map((product) => (
        <div
          className="card card-compact bg-base-100 shadow-xl border m-10"
          key={product.id}
        >
          <figure>
            <img
              className="w-40 h-56 object-scale-down"
              src={product.image}
              alt={product.title}
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title text-start">{product.title}</h2>
            <p className="text-xl font-bold m-2 text-start">
              Price: ${product.price}
            </p>
            <div className="flex">
              {generateRatingStars(product.rating.rate)}
              <p className="ml-2 font-bold">{product.rating.rate}</p>
            </div>
            <div className="card-actions justify-center mt-10">
              <button
                className="btn btn-outline"
                onClick={() => addToCart(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
