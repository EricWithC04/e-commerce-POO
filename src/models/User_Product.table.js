import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const User_Product_Table = sequelize.define(
    'user_product',
    {
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            references: {
                model: 'products',
                key: 'id'
            },
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)

export default User_Product_Table