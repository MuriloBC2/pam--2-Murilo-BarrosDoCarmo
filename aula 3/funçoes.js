function nsjteste () {
    console.log('funcionou minha função')
}

nsjteste()

function msgTesteArgumento (param){
    console.log("O parametro foi passado foi: " , param , "e o tipo dele é " ,typeof param, )
}


msgTesteArgumento("dois")



function Soma (n1, n2){
    let result = 0

    if(typeof n1 == "number" && typeof n2 == "number"){
        return result = n1 + n2
    } 

    return "Deu bom não"
   
}

console.log(Soma(3,12))
console.log(Soma("oi", 32))

const funcaoArrow = () => {
    console.log("Isso é uma arrow function")
}

funcaoArrow()