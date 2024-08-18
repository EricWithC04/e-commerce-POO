import SaleService from "../services/Sale.service.js";
import UserService from "../services/User.service.js";
import SaleUserService from "../services/SaleUser.service.js";

class SaleController {

    constructor () {}

    async getAllSales(req, res) {
        try {
            const { idUser } = req.params;
            const user = await UserService.getUserById(idUser);

            if (!user) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el usuario!'
                });
            }

            if (user.role !== "admin") {
                return res.status(403).send({
                    status: 403,
                    message: 'Solamente los administradores tienen acceso a esta función!'
                });
            }

            const sales = await SaleService.getAllSales();
            
            res.status(200).send({ sales });
        } catch (err) {
            console.error(err);
        }
    }

    async getSalesOfUser(req, res) {
        try {
            const { idUser } = req.params;

            const user = await UserService.getUserById(idUser);

            if (!user) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el usuario!'
                });
            }

            const sales = await SaleService.getSalesOfUser(idUser);

            if (!sales || sales.length === 0) {
                return res.status(404).send({
                    status: 404,
                    message: `No se han encontrado ${user.role === "client" ? "compras" : "ventas"}!`
                });
            }

            res.status(200).send({ sales });
        } catch (err) {
            console.error(err);
        }
    }

    async createSale(req, res) {
        try {
            const { idSeller, idClient } = req.params;
            const { paymentMethod } = req.body

            const userClient = await UserService.getUserById(idClient);

            if (!userClient) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el usuario!'
                });
            }

            if (userClient.role !== "client") {
                return res.status(403).send({
                    status: 403,
                    message: 'El id proporcionado no es de un cliente'
                });
            }

            const userSeller = await UserService.getUserById(idSeller);

            if (!userSeller) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el usuario!'
                });
            }

            if (userSeller.role !== "seller") {
                return res.status(403).send({
                    status: 403,
                    message: 'El id proporcionado no es de un vendedor'
                });
            }

            const total = 0

            userClient.products.forEach(product => {
                total += product.price * product.user_product.quantity
            })

            const sale = await SaleService.addSale({ paymentMethod, total });

            if (!sale) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido crear la compra!'
                });
            }

            await SaleUserService.addSaleUser({ idUser: idSeller, idSale: sale.id });
            await SaleUserService.addSaleUser({ idUser: idClient, idSale: sale.id });

            res.status(201).send({ sale });
        } catch (err) {
            console.error(err);
        }
    }
}

export default new SaleController();