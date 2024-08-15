import sequelize from "../config/db.js";
import UserModel from "../models/User.model.js";
import ProductModel from "../models/Product.model.js";
import User_Product_Table from "../models/User_Product.table.js";

UserModel.belongsToMany(ProductModel, { through: User_Product_Table });
ProductModel.belongsToMany(UserModel, { through: User_Product_Table });

export default sequelize