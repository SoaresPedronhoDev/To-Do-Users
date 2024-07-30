import express, { Request, Response, Router } from "express";
import Controller from "../Controller/Controller";

const router: Router = express.Router();


router.get("/", Controller.Menu);
router.post("/",express.urlencoded({extended : true}),Controller.loginUser)

router.get("/Register", Controller.Register)
router.post("/Register",express.urlencoded({extended : true}),Controller.RegisterUser)

router.get("/ToDoList/:name",Controller.UserPage)



export default router;


