import express from "express";
import carsRouter from "./cars.js";
import {promises as fs} from "fs";

const { readFile, writeFile } = fs; 

const app = express();
app.use(express.json());

app.use("/listaCarros", carsRouter);


app.listen(9229, async() => {
    try {

        await readFile("carlist.json");
    
    } catch (erro) {
        console.log("Erro ao carregar arquivo.");    
    }
    console.log("API Started!");

});

