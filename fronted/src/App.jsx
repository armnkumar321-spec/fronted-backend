import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5100/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            
            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <h2>{product.title}</h2>

            <p className="price">
              ${product.price}
            </p>

            <p>
              Rating: ⭐ {product.rating}
            </p>

            <p>
              Stock: {product.stock}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;