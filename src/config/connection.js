import sequelize from "./db.js";

const connectionDB = async () => {
    return new Promise(( resolve, reject ) => {
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
            
            sequelize.sync({ alter: true })
                .then(() => {
                    console.log('Synced models');
                    resolve();
                })
                .catch(err => {
                    console.log(err);
                    reject();
                })
        
        }).catch(err => {
            console.error('Unable to connect to the database:', err);
            reject();
        });
    })
}

export default connectionDB