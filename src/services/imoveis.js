import prisma from "../utils/prisma.js";

export async function getUsuarioImoveis(id) {
   try {
        console.log(parseInt(id));
        const data = await prisma.imovel.findMany({where:{id_proprietario:parseInt(id)}});
        console.log(data);
        return data;
   } catch(err) {
        throw Error(err);
   }
}

export async function postImovel(json) {
    try {
        return await  prisma.imovel.create({
            data: json
        });

    } catch(err) {
        throw Error(err);
    }
}