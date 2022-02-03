import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { detailsProduct } from "../actions/productActions";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
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
                  First Side:{""}
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
                  Second Side:{" "}
                  <select>
                    <option>Select</option>
                    <option>Corn</option>
                    <option>Potato</option>
                    <option>Brocolli</option>
                    <option>Lotus Root</option>
                    <option>Okra</option>
                  </select>
                </li>
                {product.stock > 0 && (
                  <>
                    <li>
                      <div className="row">
                        <div>Qty:</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.stock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button onClick={addToCartHandler} className="button">
                        Add to Cart
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
