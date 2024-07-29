import express, { Request, Response, Router } from "express";
import Controller from "../Controller/Controller";

const router: Router = express.Router();


router.get("/", Controller.Menu);

router.get("/Register", Controller.Register)
router.get("/ToDoList/:name",Controller.UserPage)
router.post("/Register",express.urlencoded({extended : true}),Controller.RegisterUser)

export default router;


