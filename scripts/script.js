function iniciar(){


    var ini = document.querySelector('input#inicial')
    var fim = document.querySelector('input#final')
    var passo = document.querySelector('input#passos')
    var res = document.querySelector('div#msg')
    

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       res.innerHTML = `Impossível contar!`

    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p <= 0 ) {
            window.alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }
        if (i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c}  &#x1F449 `
            }
        } else {
            //contagem descrescente 
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c}  &#x1F449 `
            }
        }        
        res.innerHTML += `&#x1F3C1 `
    }   
}