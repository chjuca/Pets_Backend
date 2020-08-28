import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Pet = sequelize.define('pets', {
    id: {
        type: Sequelize.INTEGER,                // llave primaria, con la opcion de ser autoincrementable
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    height: {
        type: Sequelize.INTEGER
    },
    weight: {
        type: Sequelize.INTEGER
    },
    race: {
        type: Sequelize.STRING
    },
    typeanimal: {
        type: Sequelize.ENUM,                         // Atributo declarado como ENUM
        values: ['DOG', 'CAT',]  // Editing this array
    },
    petstatus: {
        type: Sequelize.ENUM,
        values: ['PERDIDO', 'EN ADOPCIÓN']  // Editing this array
    }
}, {
    timestamps: false
});

export default Pet;