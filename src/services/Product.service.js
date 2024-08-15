import ProductModel from "../models/Product.model.js";

class ProductService {

    constructor () {}

    async getAllProducts() {
        const products = await ProductModel.findAll();
        return products;
    }

    async getProductById(id) {
        const product = await ProductModel.findByPk(id);
        return product;
    }

    async createProduct(data) {
        const product = await ProductModel.create(data);
        return product;
    }

    async updateProduct(id, data) {
        const product = await ProductModel.update(data, { where: { id } });
        return product;
    }

    async deleteProduct(id) {
        const product = await ProductModel.destroy({ where: { id } });
        return product;
    }

}

export default new ProductService()