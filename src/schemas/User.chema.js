import { body } from "express-validator";

const userSchema = [
    body("name")
        .exists().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser un string")
        .isLength({ min: 3 }).withMessage("El nombre debe tener al menos 3 caracteres"),
    body("email")
        .exists().withMessage("El email es requerido")
        .isEmail().withMessage("Email invalido"),
    body("password")
        .exists().withMessage("La contraseña es requerida")
        .isString().withMessage("La contraseña debe ser un string")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres"),
    body("role")
        .exists().withMessage("El rol es requerido")
        .isString().withMessage("El rol debe ser un string")
        .isIn(["client", "seller", "admin"]).withMessage("Rol invalido")
]

export default userSchema