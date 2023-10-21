import prisma from "../utils/prisma.js";

export async function getAllUsers() {
    return await prisma.usuarios.findMany();
};

export async function adicionarUsuario(json) {
    try {
        return await prisma.usuarios.create({
            data: json
        });
    } catch(err) {
        throw Error(err);
    }
}

export async function getUsuarioById(usuario) {
    try{
        return await prisma.usuarios.findUnique({ where: { usuario: usuario } });
    } catch(err) {
        throw Error(err);
    }
}

export async function getUsuarioPerMeta(meta) {
    try {
        console.log(typeof(meta));
        return await prisma.usuarios.findUnique({where:{endereco_meta_mask:meta}});
    } catch (err) {
        throw Error(err);
    }
}

export async function atualizaEmail(dados) {
    try {
        console.log(dados);
        const usuario = await prisma.usuarios.findUnique({where:{id_usuarios:dados.id_usuarios}});
        console.log(usuario);
        return await prisma.usuarios.update({where:{id_usuarios:dados.id_usuarios},data:{...usuario,email:dados.email}});
    } catch (error) {
        throw Error(error);
    }
}
