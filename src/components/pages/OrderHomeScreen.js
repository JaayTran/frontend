import React, { useEffect, useState } from "react";
import Product from "../Products";
import LoadingBox from "../LoadingBox";
import MessageBox from "../MessageBox";
import { useDispatch, useSelector } from "react-redux";
import {
  listProducts,
  listProductCategories,
} from "../../actions/productActions";
import { Link, Route } from "react-router-dom";
import SearchScreen from "./SearchScreen";

function OrderHomeScreen() {
  const dispatch = useDispatch();
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  // const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;
  // useEffect(() => {
  //   dispatch(listProducts());
  // }, [dispatch]);
  return (
    <>
      <ul className="categories">
        <li>
          <strong>Categories</strong>
        </li>
        {loadingCategories ? (
          <LoadingBox></LoadingBox>
        ) : errorCategories ? (
          <MessageBox variant="danger">{errorCategories}</MessageBox>
        ) : (
          categories.map((c) => (
            <li key={c}>
              <Link to={`/search/category/${c}`}>{c}</Link>
            </li>
          ))
        )}
      </ul>
    </>

    // <div>
    //   {loading ? (
    //     <LoadingBox></LoadingBox>
    //   ) : error ? (
    //     <MessageBox variant="danger">{error}</MessageBox>
    //   ) : (
    //     <div>
    //       <h3>Menu Catergories</h3>
    //       <ul>
    //         <button>Appetizer</button>
    //         <button>Main</button>
    //         <button>Platter</button>
    //         <button>Tacos, Wings, Rice</button>
    //         <button>Combos</button>
    //         <button>Dessert</button>
    //         <button>Drinks</button>
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
