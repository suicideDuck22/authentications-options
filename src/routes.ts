import {Request, Response, Router} from "express";

const router = Router()

router.get("/authbasic", (request: Request, response: Response) => {
        response.json({message: `Olá, usuário`});
});

export { router }