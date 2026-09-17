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
}

export default new UserController();