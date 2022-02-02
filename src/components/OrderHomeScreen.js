import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Products";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function OrderHomeScreen(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
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
