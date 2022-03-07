import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { detailsProduct } from "../../actions/productActions";

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
                <li>{product.category}</li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>Description: {product.description}</li>
              </ul>
            </div>
            <div className="details-action">
              <ul>
                {product.stock == 0 && (
                  <>
                    <li>
                      <div className="row">
                        <div className="danger">Item Unavailable</div>
                      </div>
                    </li>
                  </>
                )}
                {product.stock > 0 && (
                  <>
                    {product.category === "Wings" && (
                      <div>
                        <li>
                          <div className="row">
                            <div>Flavour: </div>
                            <div>
                              <select>
                                <option selected disabled hidden />
                                <option>BBQ</option>
                                <option>Honey Garlic</option>
                                <option>Buffalo</option>
                                <option>Cajun</option>
                              </select>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row">
                            <div>Fries: </div>
                            <div>
                              <select>
                                <option selected disabled hidden />
                                <option>Regular</option>
                                <option>Cajun</option>
                              </select>
                            </div>
                          </div>
                        </li>
                      </div>
                    )}
                    {product.category === "Rice" && (
                      <div>
                        <li>
                          <div className="row">
                            <div>Protein: </div>
                            <div>
                              <select>
                                <option selected disabled hidden />
                                <option>Chicken</option>
                                <option>Seafood</option>
                              </select>
                            </div>
                          </div>
                        </li>
                      </div>
                    )}
                    {(product.category === "Boil" ||
                      product.category === "Platter" ||
                      product.category === "Combo") && (
                      <div>
                        <li>
                          <div className="row">
                            <div>Flavour: </div>
                            <div>
                              <select>
                                <option selected disabled hidden />
                                <option>Robot Blend</option>
                                <option>Cajun</option>
                                <option>Lemon Pepper</option>
                                <option>Garlic Butter</option>
                                <option>Thai Style</option>
                              </select>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="row">
                            <div>Spice Level: </div>
                            <div>
                              <select>
                                <option selected disabled hidden />
                                <option>Non-Spicy</option>
                                <option>Mild</option>
                                <option>Medium</option>
                                <option>Fire</option>
                              </select>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div className="row">
                            <div>First Side: </div>
                            <div>
                              <select>
                                <option selected disabled hidden />
                                <option>Corn</option>
                                <option>Potato</option>
                                <option>Brocolli</option>
                                <option>Lotus Root</option>
                                <option>Okra</option>
                              </select>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row">
                            <div>Second Side: </div>
                            <div>
                              <select>
                                <option selected disabled hidden />
                                <option>Corn</option>
                                <option>Potato</option>
                                <option>Brocolli</option>
                                <option>Lotus Root</option>
                                <option>Okra</option>
                              </select>
                            </div>
                          </div>
                        </li>
                      </div>
                    )}
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
                      <button
                        onClick={addToCartHandler}
                        className="button primary"
                      >
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
