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

