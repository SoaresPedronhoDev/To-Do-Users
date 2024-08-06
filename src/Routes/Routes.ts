import express, { Request, Response, Router } from "express";
import Controller from "../Controller/Controller";

const router: Router = express.Router();


router.get("/", Controller.Menu);
router.post("/",express.urlencoded({extended : true}),Controller.loginUser)

router.get("/Register", Controller.Register)
router.post("/Register",express.urlencoded({extended : true}),Controller.RegisterUser)

router.get("/ToDo/:name",Controller.UserPage)

router.post('/ToDo/:name', Controller.addItem);


export default router;


