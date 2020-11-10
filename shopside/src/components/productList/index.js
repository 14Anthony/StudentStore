import React, { useEffect, useState } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import productAPI from "../../utils/productAPI.js";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);
// console.log(products);
  // Loads all products and sets them to products
  function loadProducts() {
    productAPI
      .getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }
  function delProduct(id) {
    productAPI
      .deleteProduct(id)
      .then((res) => loadProducts(res.data))
      .catch((err) => console.log(err));
  }
  
  return (
    <div>
      <h1>Product List</h1>

      <List>
        {products.map((data) => {
          return (
            <ListItem  key={data._id}>
              <h3 id={data._id}>{data.name}</h3>
              <p>
                -- {data.description} -- Price -- ${data.salary}
              </p>
              <DeleteBtn onClick={() => delProduct(data._id)} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default ProductList;
