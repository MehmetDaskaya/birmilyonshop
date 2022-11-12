import axios from "axios";
import { API_URL } from "@env";

const getProduct = async (data, setData) => {
  const { data: dataProduct } = await axios.get(API_URL);
  console.log(dataProduct);
  setData(dataProduct);
};

export default getProduct;
