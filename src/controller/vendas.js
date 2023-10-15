import { Router } from "express";
import { getVendasById, postVenda } from "../services/vendas.js"

const router = Router();

router.get("/:id", async(req, res, prox) => {
    try {
        const data = await getVendasById(req.params.id);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async(req, res, prox) => {
    try {
        const data = await postVenda(req.body);
        res.status(200).json(data);     
    } catch (err) {
        console.log(err);
    }
});

export default router;