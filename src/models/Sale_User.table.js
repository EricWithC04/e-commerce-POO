import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Sale_User_Table = sequelize.define(
    'sale_user',
    {
        saleId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: 'sale',
                key: 'id'
            },
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull: false
        }
    }
)

export default Sale_User_Table