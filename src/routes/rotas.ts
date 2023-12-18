import { Router, Request, Response} from "express";

const rotas = Router();

//Rota de Teste

rotas.get('/', (req:Request, res:Response) =>{
    return res.json({usuario: "Andre"});
});


//Rotas Usuários

rotas.post('/usuarios');

//Rotas Clientes


//Rotas Pedidos


export {rotas};