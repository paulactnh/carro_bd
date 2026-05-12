const { Sequelize } = require('sequelize')

const db = new Sequelize('db_carro', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

db.authenticate()
.then(()=>{
    console.log('Sucesso ao conectar com o banco de dados!')
})
.catch((error)=>{
    console.error('Falha ao conectar com o banco de dados!',err)
})

module.exports = db