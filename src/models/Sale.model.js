import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const SaleModel = sequelize.define(
    'sale',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
)

export default SaleModel