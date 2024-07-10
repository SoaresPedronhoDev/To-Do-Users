

import express,{Request,Response, Router} from "express"
const app = express()
const PORT = 3000

import router from "./Routes/Routes";

app.get('/',(req : Request,res : Response) =>{
    res.send("Home Page")
})

app.use('/',router)

app.listen(PORT,() =>{
    console.log(`Server is Running on ${PORT}`)
})

