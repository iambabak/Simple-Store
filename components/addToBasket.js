import get from "../api/createConfig";
import { createFormData } from "./CreateForm";

import axios from "axios";
import { create } from "jss";
const addToBasket = props => {
  let obj = { product: "product_lAZJwOg8VT", count: "1" };
  let response = axios.post(
    `http://api.projectant.aasoo.ir/orders/cart/add/`,
    createFormData(obj),
    createConfig()
  );
};

export default addToBasket;
