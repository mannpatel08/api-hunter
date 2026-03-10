import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <Home products={products} />
    </div>
  );
}

export default App;