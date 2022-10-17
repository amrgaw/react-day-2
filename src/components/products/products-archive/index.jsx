import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Params } from "react-router-dom";

export default function ProductsArchive(params) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetAllProducts();
  }, []);

  function GetAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }
  console.log(products);
  return (
    <div className="product-archive row p-5 gap-5 justify-content-around">
      {products.map((prod) => {
        return (
          <div key={prod.id} className="col-3">
            <div>
              <img src={prod.image} alt="" />
            </div>
            <div>
              <Link
                to={`/product/${prod.id}`}
                className="text-danger text-decloration-none"
              >
                {prod.title}
              </Link>

              <p>{prod.description}</p>
              <div>
                <div className="d-flex gap-4 align-items-center">
                  {" "}
                  <h4>{prod.price}</h4>
                  <button
                    onClick={params.InPro}
                    type="button"
                    class="btn btn-primary"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
