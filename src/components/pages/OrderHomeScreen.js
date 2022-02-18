import React, { useEffect, useState } from "react";
import Product from "../Products";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useDispatch, useSelector } from "react-redux";
import {
  listProducts,
  listProductCategories,
} from "../../actions/productActions";
import { Link } from "react-router-dom";

function OrderHomeScreen() {
  const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;
  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <ul className="categories">
      <li>
        <strong>Categories</strong>
        <button className="close-sidebar" type="button">
          <i className="fa fa-close"></i>
        </button>
      </li>
      {loadingCategories ? (
        <LoadingBox></LoadingBox>
      ) : errorCategories ? (
        <MessageBox variant="danger">{errorCategories}</MessageBox>
      ) : (
        categories.map((c) => (
          <li key={c}>
            <Link to={`/order/category/${c}`}>{c}</Link>
          </li>
        ))
      )}
    </ul>

    // <div>
    //   {loading ? (
    //     <LoadingBox></LoadingBox>
    //   ) : error ? (
    //     <MessageBox variant="danger">{error}</MessageBox>
    //   ) : (
    //     <div>
    //       <h3>Menu Catergories</h3>
    //       <ul>
    //         <a href="index.html">Appetizer//</a>
    //         <a href="index.html">Main//</a>
    //         <a href="index.html">Platter//</a>
    //         <a href="index.html">Tacos, Wings, Rice//</a>
    //         <a href="index.html">Combos//</a>
    //         <a href="index.html">Dessert//</a>
    //         <a href="index.html">Drinks</a>
    //       </ul>
    //       <div className="row center">
    //         {products.map((product) => (
    //           <Product key={product._id} product={product}></Product>
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}
export default OrderHomeScreen;
