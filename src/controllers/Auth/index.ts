import { RequestHandler } from "express";
import { authenticate } from "../../services/Auth";

export const auth: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    
    if(!email || !password) 
        return res
                .status(401)
                .json({error: true, message: 'Email e senha são obrigatórios.'});
    
    try {
        const response = await authenticate(email, password);
        
        return res.status(200).json(response);
    } catch(err: any) {
        return res.status(401).json({error: true, message: err.message});
    }
}