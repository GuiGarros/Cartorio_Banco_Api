import { Router } from "express";
import { getAllUsers, adicionarUsuario, getUsuarioById } from "../services/usuario.js"

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
        console.log(req.body)
        const data = await adicionarUsuario(req.body);
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
});

router.get("/:usuario", async(req, res, prox) =>{
    try {
        console.log(req.params.usuario);
        const data = await getUsuarioById(req.params.usuario);
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
});

export default router