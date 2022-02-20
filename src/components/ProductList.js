import React from "react";
import Product from "./Product";
import { useGlobalContext } from "../context.js";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, slides } = useGlobalContext();
  console.log(products)

  return (
    <>
    <div className="container p-0 mb-5">
    <div className="card-deck  row">
        {/* iterate thorugh it, checking for null & display six items  */}
        {products.products?.slice(0, 6).map((item) => {
          // console.log(item)
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </div>
    </>
  );
};

export default ProductList;
