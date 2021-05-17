const db = require("../../data/dbConfig")


function find() {
    return db("users")
        .select("id", "username")
}

function findById(id) {
    return db("users")
        .where("id", id)
        .select("id", "username", "password")
}

function findByUsername(username) {
    return db("users")
        .where("username", username)
}

async function add(user) {
    const [id] = await db("users").insert(user)
    return findById(id)
}

module.exports = {
    find,
    findById,
    findByUsername,
    add,
}