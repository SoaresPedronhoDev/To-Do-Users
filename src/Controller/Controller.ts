import { Request, Response } from 'express';
import path from 'path';
import bcrypt from 'bcryptjs';
import User from '../Models/Users';
import Validate from './Validate';

const Menu = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'Menu.html'));
};

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const { error } = Validate.loginValidate(req.body);
    if (error) {
        return res.status(400).json({ alert: error.message });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ alert: 'Usuário não encontrado' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ alert: 'Senha Incorreta' });
        }

        res.redirect(`/Menu/ToDo/${user.name}`);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ alert: 'Erro Interno do Servidor' });
    }
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
        return res.status(400).json({ message: 'Este email já existe' });
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10), // Hashear a senha
        items: req.body.items
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor', error });
    }
};

const UserPage = async(req: Request, res: Response) => {
    const { name } = req.params;

    try {
        const user = await User.findOne({ name });
        if (!user) {
            return res.status(404).send('Usuário não encontrado');
        }

        res.render('userPage', { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro interno do servidor');
    }
};

export default { Menu, Register, RegisterUser, UserPage, loginUser };
