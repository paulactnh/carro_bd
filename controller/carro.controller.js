const Carro = require('../models/Carro')

const cadastrar = async (req,res) =>{
    const valores = req.body
    precoVenda = 0

    if(valores.categoria === "popular"){
        precoVenda = valores.precoFabrica * 1.15
    }else if(valores.categoria === "sedan"){
        precoVenda = valores.precoFabrica * 1.20
    }else if(valores.categoria === "luxo"){
        precoVenda = valores.precoFabrica * 1.25
    }

    const valores2{
        
    }

    try{
        await Carro.create(valores2)
        res.status(201).json({message: "Dados do carro cadastrados com sucesso!!"})
    }
    catch(err){
        console.error(err)
        res.status(500).json({message: 'Erro ao tentar cadastrar dados do carro!'})
    }
}

module.exports = {cadastrar}