import { Router } from "express";
import SaleControllers from "../controllers/Sale.controllers.js";

const {
    getAllSales,
    getSalesOfUser,
    createSale
} = SaleControllers

const router = Router();

router.get("/:id", getAllSales);
router.get("/seller/:id", getSalesOfUser);
router.post("/:idSeller/:idClient", createSale);

export default router