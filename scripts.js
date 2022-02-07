const resultado =  document.querySelector('.result')
const igual = document.querySelector('.equal')

function insert (element){
    resultado.innerHTML += element
}

function clean () {
    resultado.innerHTML = ' '
}

function del() {
    if (resultado.textContent){
        let result = document.querySelector('#result').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1)
        //substring (subtrai da string)
    }
}

function equal(){
    if(resultado.textContent != 'Erro'){
        document.querySelector('#result').innerHTML = eval(resultado.innerHTML)
        //eval vai realizar as contas com o inner html do resultado
    }
}