const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const carroController = require('./controller/carro.controller')
const hostname = 'localhost'
const PORT = 3000
//---------------- Middleware --------------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
//------------------- Rotas ---------------------
app.post('/carro', carroController.cadastrar)



app.get('/',(req,res)=>{
    res.status(200).json({message: 'Aplicação rodando!!!'})
})
//----------------- Server ------------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de conexão com o banco de dados',err)
    
})