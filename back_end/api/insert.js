import { db } from "./connect.js";
import {contentArray} from "../../front_end/src/assets/database/movies.js"


const responseMovies = await db.collection("Content1").insertMany(contentArray);