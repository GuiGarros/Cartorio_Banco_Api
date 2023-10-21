import { json } from "express";
import prisma from "../utils/prisma.js"

export async function getComprasById(id){
    try {
        return await prisma.compras.findMany({where:{id_usuario:parseInt(id)}});
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

export async function atualizaStatusCompra(status) {
    try {
        const compra = await prisma.compras.findUnique({where:{id_compra:status.id_compra}});
        return await prisma.compras.update({where:{id_compra:status.id_compra},data:{...compra,status:status.status_compra}});
    } catch (error) {
        throw Error(error);
    }
}

export async function cancelaCompra(dados) {
    try {
        console.log(dados);
        const compra = await prisma.compras.findFirst({where:{id_venda:dados.id_venda}});
        console.log(compra);
        return await prisma.compras.update({where:{id_compra:compra.id_compra}, data:{...compra,status:dados.status_compra}});
    } catch (error) {
        throw Error(error);
    }
}