import Express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import env from "./environments/environments.js"
import connectionDB from "./config/connection.js"

import userRoutes from "./routes/User.routes.js"
import productRoutes from "./routes/Product.routes.js"
import saleRoutes from "./routes/Sale.routes.js"

class Server {

    constructor() {
        this.app = Express()
        this.port = env.PORT

        this.connectDB()
        this.middlewares()
        this.routes()
    }

    async connectDB() {
        await connectionDB()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(helmet())
        this.app.use(morgan('dev'))
        this.app.use(Express.json())
    }

    routes() {
        this.app.use('/user', userRoutes)
        this.app.use('/product', productRoutes)
        this.app.use('/sale', saleRoutes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

export default Server