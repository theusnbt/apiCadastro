import app from "../app.js";
import UserModel from "../model/user.model.js"

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
    async update(req, res){
        try{
            const id = req.paramas.id;
            const user = await UserModel.findByIdAndUpdate(id);

            res.status(500).json({
                message:"Usuario atualizado"
            });
        }
        catch(error){
            console.log(error);
            res.status(500).json({
                message: "Internal error"
            });
        }
    }
    async delete(req, res){
        try{
            const id = req.paramas.id;
            const user = await UserModel.findByIdAndDelete(id, req.body, { returnDocument: "after" });

            res.status(500).json({
                message:"Usuario atualizado"
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