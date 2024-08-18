import sequelize from "../config/db.js";
import UserModel from "../models/User.model.js";
import ProductModel from "../models/Product.model.js";
import SaleModel from "../models/Sale.model.js";
import User_Product_Table from "../models/User_Product.table.js";
import Sale_User_Table from "../models/Sale_User.table.js";

UserModel.belongsToMany(ProductModel, { through: User_Product_Table });
ProductModel.belongsToMany(UserModel, { through: User_Product_Table });

UserModel.belongsToMany(SaleModel, { through: Sale_User_Table });
SaleModel.belongsToMany(UserModel, { through: Sale_User_Table });

export default sequelize