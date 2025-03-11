import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/', async (request, response) => {
    response.send(await db.collection("Content1").find({}).toArray());
})

app.use(express.static(path.join(__dirname, "../front_end/dist")));

app.get('*', async (request, response) => {
    response.sendFile(path.join(__dirname, "../front_end/dist/index.html"));
})

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
})