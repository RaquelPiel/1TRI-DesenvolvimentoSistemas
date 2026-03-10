//               0           1           2            3        4          5          6          7
const comidas = ["Pizza", "Hambúrguer", "Lasanha", "Sushi", "Taco", "Salada", "Sorvete", "Pão"]
const valores = [25    ,     18      ,     30     ,    40   ,   15    ,    12    ,    10    ,   5   ]

function mostrarCardapio(){
    let contador = 0
    while(contador < comidas.length){
        console.log(comidas[contador] + " - R$ " + valores[contador])
        contador = contador + 1
    }
    console.log("------------------------------") // separador mais limpo
}

// Adicionar novos elementos na lista
function novoProduto(comida, valor){
    comidas.push(comida)
    valores.push(valor)
}

// Remover pelo índice
function deletarProduto(indice){
    comidas.splice(indice, 1)
    valores.splice(indice, 1)
}

// Execução na ordem pedida
mostrarCardapio()
novoProduto("Coxinha", 8)
mostrarCardapio()
deletarProduto(1) // remove Hambúrguer
mostrarCardapio()
