import prisma from "../utils/prisma.js";

export async function getContrato(id) {
    try {
        return await prisma.contratos.findUnique({where:{id_contrato:parseInt(id)}});
    } catch (err) {
        throw Error(err);
    }
} 

export async function postContrato(json) {
    try {
        return await prisma.contratos.create({
            data:json
        });
    } catch (err) {
        throw Error(err);
    }
}