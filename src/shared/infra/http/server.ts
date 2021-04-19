import "reflect-metadata";
import "dotenv/config"; 
import express from "express";
import "@shared/container";
import createConnection from "@shared/infra/typeorm";
import router from "./routes";

createConnection();
const app = express();

app.use(express.json());
app.use(router)
app.listen(3339,() => {
    console.log("Server is Running on Port 3339");
})