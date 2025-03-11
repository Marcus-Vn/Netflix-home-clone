import axios from "axios";
import "dotenv/config";

// const {NODE_ENV} = process.env;
// const URL = "http://localhost:3000";
const URL = "https://netflix-home-clone.onrender.com/api";

const responseMovies = await axios.get(`${URL}/`);

export const contentArray = responseMovies.data;