import User from '../models/User';
import Credential from '../models/Credential';
import { sequelize } from "../database/database"
import e from 'express';


export async function createUser(req, res) {

    const { name, avatar, lastname, numberphone, email, password } = req.body;
    const t = await sequelize.transaction();

    try {
        const newUser = await User.create({
            name,
            avatar,
            lastname,
            numberphone
        }, { transaction: t });

        const newCredential = await Credential.create({
            email,
            password,
            userid: newUser.id
        }, { transaction: t })

        await t.commit()

        return res.json({
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {

        await t.rollback();
        return res.status(500).json({
            message: `the email ${error.fields.email} has already been registered`,
            data: {}
        })
    }

}
