import { Router } from 'express';
const router = Router();

import { createUser } from "../controllers/user.controller"


router.post('/', createUser);


export default router;