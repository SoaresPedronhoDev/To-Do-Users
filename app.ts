
import express, {Request,Response} from "express"
const app = express()
import mongoose from "mongoose"
const PORT : number = 3000

app.get('/',(req : Request, res: Response) =>{
    res.send(console.log("Esta tudo ok"))
})

app.listen(PORT, () =>{
    console.log(`O Servidor esta rodando na porta ${PORT}`)
})

