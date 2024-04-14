import { useEffect, useState } from "react";
import { STORE_API } from "../utils/constant";

const useWekretaApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(STORE_API);
    const json = await data.json();
    setProducts(json.object);
  };

  return products;
};
export default useWekretaApi;
