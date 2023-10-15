import { Router } from "express";
import { getComprasById, postCompra } from "../services/compras.js"

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

export default router;