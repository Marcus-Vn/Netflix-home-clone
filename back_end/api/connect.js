import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.URI);

export const db = client.db("netflixData");
