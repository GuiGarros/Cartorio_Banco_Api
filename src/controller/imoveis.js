import { Router } from "express";
import { getUsuarioImoveis, postImovel } from "../services/imoveis.js"
const router = Router();


router.get("/:userid", async(req,res,prox) => {
    try {
        const data = await getUsuarioImoveis(req.params.userid);
        console.log(data);
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
});

router.post("/", async(req,res,prox) => {
    try {
        const data = await postImovel(req.params);
        res.status(200).json(data);
    } catch {
        console.log(err);
    }
});

export default router;