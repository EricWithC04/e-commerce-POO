import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const RolModel = sequelize.define(
    'rol',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default RolModel