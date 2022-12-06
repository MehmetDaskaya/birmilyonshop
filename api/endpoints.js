import axios from "axios";
import { API_URL } from "@env";

const getProduct = async (data, setData, setLoading, setError) => {
  try {
    const { data: dataProduct } = await axios.get(API_URL);
    console.log(dataProduct);
    setData(dataProduct);
    setLoading(false);
  } catch (err) {
    setError(err.message);
    setLoading(false);
    console.log(err);
  }
};

export default getProduct;
