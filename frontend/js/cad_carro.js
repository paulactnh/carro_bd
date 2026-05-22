let res = document.getElementById('res')
let btn_cad = document.getElementById('btn_cad')

btn_cad.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const marca = document.getElementById('marca').value
    const categoria = document.getElementById('categoria').value
    const ano = document.getElementById('ano').value
    const precoFabrica = document.getElementById('precoFabrica').value

    const valores = {
        nome: nome,
        marca: marca,
        categoria: categoria,
        ano: ano,
        precoFabrica: precoFabrica
    }
    console.log(valores)

    fetch('http://localhost:3000/carro',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados=>{
        res.innerHTML = ''
        res.innerHTML += `<p>${dados.message}</p>`
        document.querySelector('form').reset()
    })
    .catch((err)=>{
        console.log('Erro ao tentar cadastrar o carro',err)
    })
})