import axios from "axios";
import { baseUrl } from "../constants/contstants";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
