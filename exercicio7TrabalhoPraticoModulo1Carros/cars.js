import express from "express";
import {promises as fs} from "fs";

const { readFile, writeFile } = fs; 
const router = express.Router();

router.post("/adicionarMarca", async(req, res) => {
    try 
    {
        let marca = req.body;
        const listaCarros = JSON.parse(await readFile("carlist.json"));
       
        listaCarros.push(marca);
        await writeFile("carlist.json", JSON.stringify(listaCarros) ); 
        res.send("Marca " + marca.brand + " adicionada.");
        
    }
    catch(err) 
    {
        res.status(400).send({ erro: err.message });
    }    
})

router.get("/", async(req, res) => 
{
    try
    {
        const listaCarros = JSON.parse(await readFile("carlist.json"));
        res.send(listaCarros);

    } 
    catch (err)
    {
        res.status(400).send({ erro: err.message });
    } 
})

router.get("/marca/:nomemarca", async(req, res) => 
{
    try 
    {
        const listaCarros = JSON.parse(await readFile("carlist.json"));
        const marca = listaCarros.find(marca => marca.brand === req.params.nomemarca);

        if (marca !== undefined) 
        {
            res.send(marca);    
        }
        else 
        {
            res.send("Marca não encontrada.")
        }
    }
    catch (err) 
    {
        res.status(400).send({ erro: err.message });
    }
})

router.get("/maisModelos", async(req, res) => 
{    
    try 
    {
        let maisModelos = 0;
        let marcaMaisModelos = {};
        const listaCarros = JSON.parse(await readFile("carlist.json"));

        for (var marca of listaCarros) 
        {
           if (marca.models.length > maisModelos)
           {    
                maisModelos = marca.models.length;
                marcaMaisModelos = marca.brand;
           };
        }

        res.send(marcaMaisModelos);    
    }
    catch (err) 
    {
        res.status(400).send({ erro: err.message });
    }

})

router.get("/listaMaisModelos/:x", async(req, res) => 
{    
    try 
    {
        let maisModelos = [];
        let listaMaisModelos = [];
        let x = parseInt(req.params.x);
        const listaCarros = JSON.parse(await readFile("carlist.json"));

        listaCarros.sort(function ordenar(a, b) 
        {
            return b.models.length - a.models.length;
        })

        listaMaisModelos = listaCarros.slice(0, x);

        for (const marca of listaMaisModelos) 
        {
            maisModelos.push(marca.brand + " - " + marca.models.length);            
        }

        res.send(maisModelos);    
    }
    catch (err) 
    {
        res.status(400).send({ erro: err.message });
    }

})

router.get("/menosModelos", async(req, res) => 
{
    let menosModelos = 999;
    let marcaMenosModelos;

    try 
    {
        const listaCarros = JSON.parse(await readFile("carlist.json"));

        for (var marca of listaCarros) 
        {
           if ((marca.models.length < menosModelos)) 
           {
             menosModelos = marca.models.length;
             marcaMenosModelos = marca.brand;
           };
        }

        res.send(marcaMenosModelos);    
    }
    catch (err) 
    {
        res.status(400).send({ erro: err.message });
    }
})

router.get("/listaMenosModelos/:x", async (req, res) => 
{
    try 
    {
        let maisModelos = [];
        let listaMaisModelos = [];
        let x = parseInt(req.params.x);
        const listaCarros = JSON.parse(await readFile("carlist.json"));

        listaCarros.sort(function ordenar(a, b) {
            return a.models.length - b.models.length;
        })

        listaMaisModelos = listaCarros.slice(0, x);

        for (const marca of listaMaisModelos) 
        {
            maisModelos.push(marca.brand + " - " + marca.models.length);            
        }

        res.send(maisModelos);    
        console.log(maisModelos);
    }
    catch (err) 
    {
        res.status(400).send({ erro: err.message });
    }
}) 

export default router;