import UserModel  from '../models/User.js'

export async function findByEmail(email) {
    return await UserModel.findOne({ email })
}

export async function create(newUser) {
    return await UserModel.create(newUser);
}