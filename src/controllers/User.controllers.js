import UserService from "../services/User.service.js";

class UserControllers {

    constructor() {}

    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();

            if (!users || users.length === 0) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se han encontrado usuarios!'
                })
            }

            res.status(200).json({ users });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;

            let user = await UserService.getUserById(id);

            if (!user) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el usuario!'
                })
            }

            if (user.role === "client") {
                user = await UserService.getUserById(id, true);
            }

            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createUser(req, res) {
        try {
            const data = req.body;
            
            const newUser = await UserService.createUser(data);

            if (!newUser) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido crear el usuario!'
                })
            }

            res.status(201).json({ newUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async aggregateProductToUser(req, res) {
        try {
            const { idUser, idProduct } = req.params;
            const { quantity } = req.body;

            const user = await UserService.getUserById(idUser);

            if (!user) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha encontrado el usuario!'
                })
            }

            if (user.role !== "client") {
                return res.status(403).send({
                    status: 403,
                    message: 'Solamente los clientes pueden agregar productos al carrito!'
                })
            }

            const newUserProduct = await UserService.aggregateProductToUser(idUser, idProduct, quantity);

            if (!newUserProduct) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido agregar el producto al carrito!'
                })
            }

            res.status(201).json({ newUserProduct });
        } catch (err) {
            console.error(err);
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;

            const updatedUser = await UserService.updateUser(id, data);

            if (!updatedUser) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido actualizar el usuario!'
                })
            }

            res.status(200).json({ updatedUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            const deletedUser = await UserService.deleteUser(id);

            if (!deletedUser) {
                return res.status(404).send({
                    status: 404,
                    message: 'No se ha podido eliminar el usuario!'
                })
            }

            res.status(200).json({ deletedUser });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new UserControllers()