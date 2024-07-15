

import express,{Request,Response, Router} from "express"
const app = express()
import path from "path";
const PORT = 3000

import router from "./Routes/Routes";

app.use(express.static(path.join(__dirname,'..', 'public')));

app.get('/Menu',(req : Request,res : Response) =>{
    res.sendFile(path.join(__dirname, '..','public', 'Menu.html'));
})

app.use('/',router)


app.listen(PORT,() =>{
    console.log(`Server is Running on ${PORT}`)
})

