import express, { Request, Response, Router } from "express";
import Controller from "../Controller/Controller";

const router: Router = express.Router();


router.get("/Menu", Controller.Menu);

export default router;


