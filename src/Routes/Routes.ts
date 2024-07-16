import express, { Request, Response, Router } from "express";
import Controller from "../Controller/Controller";

const router: Router = express.Router();


router.get("/", Controller.Menu);

router.get("/Register", Controller.Register)

export default router;


