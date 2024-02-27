import { useEffect, useState } from "react";
import "./loadMoreData.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) return <div>Loading... Please Wait</div>;

  if (errorMessage) return <div>An unknown error occurred</div>;

  return (
    <div className="data-container">
      <div className="products-container">
        {products && products.length
          ? products.map((item) => (
              <div className="products" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          className="load-more-button"
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disableButton ? <div>You have reached to 100 products.</div> : null}
      </div>
    </div>
  );
}
