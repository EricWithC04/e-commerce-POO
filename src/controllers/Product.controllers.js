import ProductService from "../services/Product.service.js";
import UserService from "../services/User.service.js";
import UserProductService from "../services/UserProduct.service.js";

class ProductController {

    constructor () {}

    async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();

            if (!products || products.length === 0) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se han encontrado productos!'
                })
            }

            res.status(200).json({ products });
        } catch (err) {
            console.error(err);
        }
    }

    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.getProductById(id);

            if (!product) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el producto!'
                })
            }

            res.status(200).json({ product });
        } catch (err) {
            console.error(err);
        }
    }

    async createProduct(req, res) {
        try {
            const {
                quantity,
                ...data
            } = req.body;
            const { idUser } = req.params;

            const user = await UserService.getUserById(idUser);

            if (!user) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el usuario!'
                })
            }

            if (user.role === "client") {
                return res.status(403).send({
                    status: 403,
                    message: 'Solamente los vendedores y administradores pueden crear productos!'
                })
            }

            const product = await ProductService.createProduct(data);
            
            if (!product) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido crear el producto!'
                })
            }

            await UserProductService.addProductToUser(idUser, product.id, quantity);

            res.status(201).send({ product });
        } catch (err) {
            console.error(err);
        }
    }

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;

            const product = await ProductService.updateProduct(id, data);

            if (!product) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido actualizar el producto!'
                })
            }

            res.status(200).send({ product });
        } catch (err) {
            console.error(err);
        }
    }

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.deleteProduct(id);

            if (!product) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido eliminar el producto!'
                })
            }

            res.status(200).send({ product });
        } catch (err) {
            console.error(err);
        }
    }
}

export default new ProductController()