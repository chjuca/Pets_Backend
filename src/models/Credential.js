import Sequelize from "sequelize";
import { sequelize } from "../database/database"

const Credential = sequelize.define('credentials', {
    id: {
        type: Sequelize.INTEGER,                // llave primaria, con la opcion de ser autoincrementable
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING
    },
    userid: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Credential;