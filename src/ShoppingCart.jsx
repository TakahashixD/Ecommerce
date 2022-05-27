import React, { useState, useEffect } from "react";
import Product from "./Product";

function ShoppingCart() {
  const ProductData = (id, productName, price, quantity) => {
    return {
      id: id,
      productName: productName,
      price: price,
      quantity: quantity,
    };
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/products", { method: "GET" });
      const prods = await response.json();
      console.log(prods);
      setDataShop(prods);
    }
    fetchData();
  });

  const [dataShop, setDataShop] = useState([]);

  //executa qnd o cliente clica no +
  const handleIncrement = (product, maxValue) => {
    let allProducts = [...dataShop];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      setDataShop(allProducts);
    }
  };
  //executa qnd o cliente clica no -
  const handleDecrement = (product, minValue) => {
    let allProducts = [...dataShop];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      setDataShop(allProducts);
    }
  };

  //executa qnd clica no X do carrinho
  const handleDelete = (product) => {
    let allProducts = [...dataShop];
    let index = allProducts.indexOf(product);
    if (window.confirm("Are you sure to delete?")) {
      allProducts.splice(index, 1);
      setDataShop(allProducts);
    }
  };
  return (
    <div>
      <h4>Carrinho da loja</h4>
      <div className="row">
        {dataShop.map((prod) => {
          return (
            <Product
              key={prod.id}
              product={prod}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onDelete={handleDelete}
            >
              <button className="btn btn-primary">Buy Now</button>
            </Product>
          );
        })}
      </div>
    </div>
  );
}
export default ShoppingCart;
