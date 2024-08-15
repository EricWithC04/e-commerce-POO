import UserModel from "../models/User.model.js";
import ProductModel from "../models/Product.model.js";
import User_Product_Table from "../models/User_Product.table.js";

class UserService {

    constructor() {}

    async getAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }

    async getUserById(id, isClient=false) {
        const user = await UserModel.findByPk(id, isClient ? { 
            attributes: ["name", "email", "role"],
            include: { 
                model: ProductModel, 
                attributes: ['name'],
                through: {
                    model: User_Product_Table,
                    attributes: ['quantity']
                }
            }
        } : {});
        return user;
    }

    async createUser(user) {
        const newUser = await UserModel.create(user);
        return newUser;
    }

    async updateUser(id, data) {
        const updatedUser = await UserModel.update(data, { where: { id } })
        return updatedUser;
    }

    async deleteUser(id) {
        const deletedUser = await UserModel.destroy({ where: { id } })
        return deletedUser;
    }
}

export default new UserService()