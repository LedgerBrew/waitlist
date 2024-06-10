import * as mongoose from "mongoose"

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/newsletter"

const DATABASE_NAME = process.env.DATABASE_NAME || "newsletter"

const database = mongoose.createConnection(DATABASE_URL).useDb(DATABASE_NAME)

database.on("error", console.error.bind(console, "database connection error:"))

export default database