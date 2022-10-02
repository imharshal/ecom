import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../CartContext";
import Card from "./partials/card";
import "./products.css";
const Products = () => {
  const { setCartItems } = useContext(CartContext);
  const [products, setProducts] = useState({});

  useEffect(() => {
    let dataStore = [];
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((res) => res.json())
      .then((res) => {
        for (const product in res) {
          dataStore.push(res[product]);
        }
        setProducts(dataStore);
      });

    // eslint-disable-next-line
  }, []);
  function handleCart() {
    setCartItems((c) => c + 1);
  }

  let productList = null;
  if (products.length > 0) {
    productList = products.map((product) => (
      <Card
        key={product.id}
        id={product.id}
        name={product.productName}
        image={product.productImage}
        oldPrice={product.oldPrice}
        newPrice={product.newPrice}
        handleCart={handleCart}
      />
    ));
  }
  return (
    <div className="row">
      <div className="products">
        <h3>Products</h3>
        <div className="product-list">{productList}</div>
      </div>
    </div>
  );
};

export default Products;
