import { Request, Response } from "express";
import path from "path";

const Menu = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..','..', 'public', 'Menu.html'));
};

const register = (req: Request, res: Response) => {
    // Implementation of the register function
};

export default { Menu };
