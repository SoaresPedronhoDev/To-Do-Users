import { Request, Response } from "express";
import path from "path";

const Menu = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..','..', 'public', 'Menu.html'));
};

const Register = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..','..', 'public', 'Register.html'));
};

export default { Menu, Register };
