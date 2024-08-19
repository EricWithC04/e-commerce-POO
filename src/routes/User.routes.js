import { Router } from "express";
import UserControllers from "../controllers/User.controllers.js";
import userSchema from "../schemas/User.chema.js";
import { validateSchema } from "../middleware/validationSchema.js";

const router = Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = UserControllers

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', userSchema, validateSchema, createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router