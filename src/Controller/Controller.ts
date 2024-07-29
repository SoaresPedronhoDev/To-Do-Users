import { Request, Response, Router } from 'express';
import path from 'path';
import User from '../Models/Users';
import Validate from './Validate'; // Atualize o caminho se necessário

const router = Router();

const Menu = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'Menu.html'));
}; 

const Register = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'Register.html'));
};

const RegisterUser = async (req: Request, res: Response) => {
    const { error } = Validate.registerValidate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message }); 
    }

    const selectedUser = await User.findOne({ email: req.body.email });
    if (selectedUser) {
        return res.status(400).json({ message: 'This email already exists' }); 
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        items: req.body.items
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser); 
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Internal server error', error }); 
    }
};
const UserPage = (req : Request, res : Response) =>{

    const username = req.body.name;

    const filePath = path.join(__dirname, '..', '..', 'public', 'views', 'UserPage.ejs');

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('User page not found');
        }
    });
}



export default {Menu,Register,RegisterUser,UserPage}
