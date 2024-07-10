
import express, { Request, Response, Router } from "express";
import path from "path";
const app : Router  = express();
const router = Router()


const MenuRouter = router.get('/Menu', (req : Request, res : Response) =>{
    try{
        res.sendFile(path.join(__dirname, '../../public', 'Menu.html'));
    }catch(error){
        console.log(error);
        res.status(500).send("An error occurred");
    }
})

export default router;

