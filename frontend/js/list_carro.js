let res = document.getElementById('res')
let btn_list = document.getElementById('btn_list')

btn_list.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/carros')
    .then(res =>res.json())
    .then(dados =>{
        res.innerHTML = ''
        res.innerHTML += `
            <table>
            ${thead()}
            ${tbody(dados)}
            </table>
        `
    })
    .catch((err)=>{
        console.log('Não foi possível listar os dados dos carros',err)
    })
})

function thead(){
    let cabTabela = `
    <thead>
        <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Ano</th>
            <th>Preço de Fábrica</th>
            <th>Preço de Venda</th>
        </tr>
    </thead>
    `
    return cabTabela
}

function tbody(dados){
    let tabela = `<tbody>`
    dados.forEach(el =>{
        tabela += `
        <tr>
            <td>${el.codCarro}</td>
            <td>${el.nome}</td>
            <td>${el.marca}</td>
            <td>${el.categoria}</td>
            <td>${el.ano}</td>
            <td>${el.precoFabrica}</td>
            <td>${el.precoVenda}</td>
        </tr>
        `
    })

    tabela += `</tbody>`
    return tabela
}