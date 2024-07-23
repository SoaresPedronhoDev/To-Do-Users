import { Request, Response, Router } from 'express';
import path from 'path';
import User from '../Models/Users';

const router = Router();

const Menu = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'Menu.html'));
}; 

const Register = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'Register.html'));
};

const RegisterUser = async (req: Request, res: Response) => {

    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            items: req.body.items
        });

        const newUser = await user.save();
        res.status(201).json(newUser);
        console.log("deu certo dog")
    } catch (error) {
        console.error(error); 
        res.render('index',{error, body: req.body})
    }
};



export default {Menu,Register,RegisterUser}
