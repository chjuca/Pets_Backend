import Sequelize from "sequelize";
import { sequelize } from "../database/database"

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,                // llave primaria, con la opcion de ser autoincrementable
        primaryKey: true,
        autoIncrement: true
    },
    avatar: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    numberphone: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
}
);
export default User;