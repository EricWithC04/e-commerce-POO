import SaleModel from "../models/Sale.model.js";

class SaleService {

    constructor () {}

    async getAllSales() {
        const sales = await SaleModel.findAll();
        return sales;
    }

    async getSaleByUserId(id) {
        const sale = await SaleModel.findAll({ where: { idUser: id } });
        return sale;
    }

    async addSale(data) {
        const sale = await SaleModel.create(data);
        return sale;
    }

}

export default new SaleService()