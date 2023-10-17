import { json } from "express";
import prisma from "../utils/prisma.js"

export async function getVendasById(id){
    try {
        return await prisma.vendas.findMany({where:{id_vendedor:parseInt(id)}});
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

export async function atualizaStatusVenda(status) {
    try {
        const compra = await prisma.vendas.findUnique({where:{id_venda:status.id_venda}});
        return await prisma.vendas.update({where:{id_venda:status.id_venda},data:{...compra,status:status.status_venda}});
    } catch (error) {
        throw Error(error);
    }
}