import { json } from "express";
import prisma from "../utils/prisma.js"

export async function getVendasById(id){
    try {
        return await prisma.vendas.findMany({where:{id_venda:id}});
    } catch (err) {
        throw Error(err);         
    }
}

export async function postVenda(json){
    try {
        return await prisma.vendas.create({
            data:json
        });
    } catch (err) {
        throw Error(err);
    }
}