import axios from "axios";

const URL = "http://localhost:3000";

const responseMovies = await axios.get(`${URL}/`);

export const contentArray = responseMovies.data;