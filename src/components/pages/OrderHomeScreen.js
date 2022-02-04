import React, { useEffect } from "react";
import Product from "../Products";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";

function OrderHomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <h3>Menu Catergories</h3>
          <ul>
            <a href="index.html">Appetizer//</a>
            <a href="index.html">Main//</a>
            <a href="index.html">Platter//</a>
            <a href="index.html">Tacos, Wings, Rice//</a>
            <a href="index.html">Combos//</a>
            <a href="index.html">Dessert//</a>
            <a href="index.html">Drinks</a>
          </ul>
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default OrderHomeScreen;
