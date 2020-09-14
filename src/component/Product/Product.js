import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="image-area">
        <img src={img} alt="" />
      </div>
      <div className="content-area">
        <h4 className="name">{name}</h4>
        <p>
          by: <strong>{seller}</strong>
        </p>
        <p>
          ${price}
        </p>
        <p>
          <small>
            only <strong>{stock}</strong> left in stock - order now
          </small>
        </p>
      </div>
    </div>
  );
};

export default Product;
