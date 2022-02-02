import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/order/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/order/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className="row">
          <div className="price">${product.price}</div>
          <div>
            Status:
            {product.stock > 0 ? (
              <span className="success">In Stock</span>
            ) : (
              <span className="danger">Unavailable</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// {products.map((product) => (
//     <li>
//       <div className="product">
//         <Link to={"/order/" + product._id}>
//           <img
//             className="product-img"
//             src={product.image}
//             alt="product"
//           />
//         </Link>
//         <div className="product-name">
//           <Link to={"/order/" + product._id}>{product.name}</Link>
//         </div>
//         <div className="product-type"> {product.type} </div>
//         <div className="product-price"> ${product.price} </div>
//       </div>
//     </li>
//   ))}
