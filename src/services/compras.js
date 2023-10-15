import { json } from "express";
import prisma from "../utils/prisma.js"

export async function getComprasById(id){
    try {
        return await prisma.compras.findMany({where:{id_venda:id}});
    } catch (err) {
        throw Error(err);         
    }
}

export async function postCompra(json){
    try {
        return await prisma.compras.create({
            data:json
        });
    } catch (err) {
        throw Error(err);
    }
}