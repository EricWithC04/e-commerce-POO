import UserModel from "../models/User.model.js";

class UserService {

    constructor() {}

    async getAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }

    async getUserById(id) {
        const users = await UserModel.findByPk(id);
        return users;
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