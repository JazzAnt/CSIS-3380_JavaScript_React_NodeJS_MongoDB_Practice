// This is obtained from the database at atlas (cloud)
const username = ``
const db_password = ``
const db_name = "booksDB"
export const uriAtlas = `mongodb+srv://${username}:${db_password}
@fullstackwebdevpractice.cdbfsy8.mongodb.net/${db_name}?appName=FullStackWebDevPractice`

// This is the Compass database (local)       //this is the database name
export const uriCompass = `mongodb://localhost:27017/${db_name}`