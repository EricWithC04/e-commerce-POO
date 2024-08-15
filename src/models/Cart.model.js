import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const CartModel = sequelize.define(
    'cart',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }
)

export default CartModel