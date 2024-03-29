import { Router } from "express";
import { getUsuarioImoveis, postImovel, updateImovel } from "../services/imoveis.js"
const router = Router();


router.get("/:userid", async(req,res,prox) => {
    try {
        const data = await getUsuarioImoveis(req.params.userid);
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
});

router.post("/", async(req,res,prox) => {
    try {
        const data = await postImovel(req.body);
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
});

router.put("/", async(req,res,prox) => {
    try{
        const data = await updateImovel(req.body);
        res.status(200).json(data);
    } catch (err){
        console.log(err);
    } 
});

export default router;