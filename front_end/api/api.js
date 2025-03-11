import axios from "axios";
import "dotenv/config";

const {NODE_ENV} = process.env;
const URL = NODE_ENV === 'development' ? "http://localhost:3000" : '/api';

const responseMovies = await axios.get(`${URL}/`);

export const contentArray = responseMovies.data;