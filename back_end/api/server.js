import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', async (request, response) => {
    response.send(await db.collection("Content1").find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
})