import app from "../../app.js";

class UserController{

    async create(req, res){
        try{
            const { password } = req.body;

            res.status(201).json({
                message: "Usuário Criado"
            });
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                message: "Internal error"
            });
        }
    }

    async read(req, res){
        try{
            const id = req.params.id;

            res.status(200).json({
                message:"Usuario lido com sucesso"
            });
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                message: "Internal error"
            });
        }
    }
}

export default new UserController();