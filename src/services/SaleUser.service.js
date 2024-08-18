import Sale_User_Table from "../models/Sale_User.table.js";

class SaleUserService {

    constructor () {}

    async addSaleUser(data) {
        const saleUser = await Sale_User_Table.create(data);
        return saleUser;
    }

}

export default new SaleUserService()