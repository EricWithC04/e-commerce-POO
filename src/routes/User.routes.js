import { Router } from "express";
import UserControllers from "../controllers/User.controllers.js";
import userSchema from "../schemas/User.chema.js";
import { validateSchema } from "../middleware/validationSchema.js";

const router = Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    aggregateProductToUser,
    updateUser,
    incrementProductQuantity,
    deleteUser
} = UserControllers

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', userSchema, validateSchema, createUser);
router.post('/:idUser/:idProduct', aggregateProductToUser);
router.put('/:id', updateUser);
router.put('/:idUser/:idProduct', incrementProductQuantity);
router.delete('/:id', deleteUser);

export default router