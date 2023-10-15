import express from "express"
import cors from 'cors';
import usuarios from "./controller/usuarios.js"
import imoveis from "./controller/imoveis.js"
import contratos from "./controller/contratos.js"
import vendas from "./controller/vendas.js"
import compras from "./controller/compras.js"

const app = express()
app.use(express.json())

const PORT = 3000

const corsOptions = {
    origin: 'http://localhost:5003', // Substitua pelo domínio permitido
};

app.use(cors(corsOptions));  
app.use("/usuarios",usuarios);
app.use("/imoveis",imoveis);
app.use("/contratos",contratos);
app.use("/vendas", vendas);
app.use("/compras",compras);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));