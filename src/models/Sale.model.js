import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const SaleModel = sequelize.define(
    'sale',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        paymentMethod: {
            type: DataTypes.ENUM("Efectivo", "Tarjeta", "Transferencia"),
            defaultValue: "Efectivo",
            allowNull: false
        }
    }
)

export default SaleModel