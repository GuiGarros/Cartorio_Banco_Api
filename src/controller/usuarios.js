import { Router } from "express";
import { getAllUsers, adicionarUsuario, getUsuarioById,getUsuarioPerMeta,atualizaEmail } from "../services/usuario.js"

const router = Router();

router.get("/", async(req, res, prox) => {
    try{
        const data = await getAllUsers();
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
});

router.post("/", async(req, res, prox) => {
    try{
        const data = await adicionarUsuario(req.body);
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
});

router.get("/:usuario", async(req, res, prox) =>{
    try {
        const data = await getUsuarioById(req.params.usuario);
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
});

router.get("/meta/:meta", async(req,res,prox) => {
    try {
        const data = await getUsuarioPerMeta(req.params.meta);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
})

router.put("/",async(req,res,prox) => {
    try {
        const data = await atualizaEmail(req.body);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
})

export default router