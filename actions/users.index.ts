'use server'
import { User } from "@/database/user.model";


interface UserData {
    email: string;
}

export const createUser = async ({ email}: UserData) => {
    const newUser = new User ({email})
    const result = (await newUser.save())?.toObject()
    return mongoToJSON(result)
}

export const mongoToJSON = (value: any) => {
    if (value) {
        return JSON.parse(JSON.stringify(value))
    }
    return null
}