import { Router } from "express";
const router = Router();
import server from './registrationRestaurant'

router.use("/", server)

export default router