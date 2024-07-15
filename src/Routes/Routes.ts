
import express, { Request, Response, Router } from "express";
import path from "path";
const app : Router  = express();
const router = Router()


// const MenuRouter = router.get('/Menu', (req : Request, res : Response) =>{
//     try{
//         const filePath = path.join(path.join(__dirname, 'views', 'index.html'));
//         res.sendFile(filePath);
//     }catch(error){
//         console.log(error);
//         res.status(500).send("An error occurred");
//     }
// })

export default router;

