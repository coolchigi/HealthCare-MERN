import axios from "axios";

const url = "http://localhost:5000/service";

export const fetchServices = () => axios.get(url);
