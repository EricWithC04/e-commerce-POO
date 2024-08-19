import { body } from "express-validator";

const productSchema = [
    body("name")
        .exists().withMessage("El nombre es requerido")
        .isString().withMessage("El nombre debe ser un string")
        .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),
    body("price")
        .exists().withMessage("El precio es requerido")
        .isFloat().withMessage("El precio debe ser un entero o decimal")
        .isLength({ min: 1 }).withMessage("El precio debe tener al menos 1 digito"),
    body("stock")
        .exists().withMessage("El stock es requerido")
        .isInt().withMessage("El stock debe ser un entero")
        .isLength({ min: 1 }).withMessage("El stock debe tener al menos 1 digito"),
]

export default productSchema