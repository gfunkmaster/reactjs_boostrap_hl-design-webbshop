import React from "react";
import { Link, useParams } from "react-router-dom";

const Product = ({ id, name, product_image }) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 " key={id}>
      <div className="card">
        <Link className="img-card" to={`/products/${id}`}>
          <img src={product_image.url} alt={name} />
        </Link>
        <div className="card-content">
          <Link to={`/products/${id}`} className="text-decoration-none text-dark">
          <h4 className="fs-6 text-uppercase fw-light">{name}</h4>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Product;
