import React from "react";
import data from "../data";
import { Link } from "react-router-dom";
import "../App.css";

function ProductScreen(props) {
  console.log(props.match.params.id);
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found!</div>;
  }
  return (
    <div>
      <div className="back-to-page">
        <Link to="/order">Back to Order Page</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>{product.type}</li>
            <li>
              Price: <b>${product.price}</b>
            </li>

            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>
              Flavour:{" "}
              <select>
                <option>Select</option>
                <option>Robot Blend</option>
                <option>Cajun</option>
                <option>Lemon Pepper</option>
                <option>Garlic Butter</option>
                <option>Thai Style</option>
              </select>
            </li>
            <li>
              Spice Level:{" "}
              <select>
                <option>Select</option>
                <option>Non-Spicy</option>
                <option>Mild</option>
                <option>Medium</option>
                <option>Fire</option>
              </select>
            </li>
            <li>
              Sides:{" "}
              <select>
                <option>Select</option>
                <option>Corn</option>
                <option>Potato</option>
                <option>Brocolli</option>
                <option>Lotus Root</option>
                <option>Okra</option>
              </select>
            </li>
            <li>
              <button className="button">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;
