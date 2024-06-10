import database from "./base.model";
import { Schema } from "mongoose";

export type UserType = {
	email: string;
}
export const User = database.model(
    'user', new Schema<UserType> ({
    email: { type: String, required: true },

})
)
