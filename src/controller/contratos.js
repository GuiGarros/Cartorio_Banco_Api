import { Router } from "express";
import { getContrato, postContrato } from "../services/contratos.js";
const router = Router();

router.get("/:contractid", async(req,res,prox) => {
    try {
        const data = await getContrato(req.params.contractid);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async(req,res,prox) => {
    try {
        const data = await postContrato(req.body);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
});

export default router;