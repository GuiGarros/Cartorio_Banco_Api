import { Router } from "express";
import { getComprasById, postCompra, atualizaStatusCompra,cancelaCompra } from "../services/compras.js"

const router = Router();

router.get("/:id", async(req, res, prox) => {
    try {
        const data = await getComprasById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
});



router.post("/", async(req, res, prox) => {
    try {
        const data = await postCompra(req.body);
        res.status(200).json(data);     
    } catch (err) {
        console.log(err);
    }
});

router.put("/", async(req,res,prox) => {
    try {
        const data = await atualizaStatusCompra(req.body);
        res.status(200).json(data);
        
    } catch (error) {
        console.log(error)
    }
})

router.put("/cancela", async(req,res,prox) => {
    try {
        const data = await cancelaCompra(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
});
export default router;