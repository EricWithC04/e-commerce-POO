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

    async incrementProductQuantity(userId, productId, quantity) {
        const userProduct = await User_Product_Table.increment(
            { quantity },
            {
                where: {
                    userId,
                    productId
                }
            }
        )
        return userProduct
    }

    async removeProductFromUser(userId, productId) {
        const userProductRemoved = await User_Product_Table.destroy({
            where: {
                userId,
                productId
            }
        })
        return userProductRemoved
    }

    async removeAllProductsFromUser(userId) {
        const userProductsRemoved = await User_Product_Table.destroy({
            where: {
                userId
            }
        })
        return userProductsRemoved
    }

}

export default new UserProductService()