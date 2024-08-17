import User_Product_Table from "../models/User_Product.table.js";

class UserProductService {

    constructor () {}

    async addProductToUser(userId, productId, quantity) {
        const userProduct = await User_Product_Table.create({
            userId,
            productId,
            quantity
        });
        return userProduct;
    }

}

export default new UserProductService()