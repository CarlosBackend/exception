function checkPositivo(numeros){
        if(Array.isArray(numeros)){
            throw new Error("O argumento deve ser de uma array")
        }

        const allPositive = numeros.every((num) => num >0);
        if(allPositive){
            throw new Error("O array deve conter apenas numeros positivos")
        }
        return true;
}
try{
    const numbers = [1,2,3,4,5,6];
    const isPositive = checkPositivo(numbers)
    console.log(isPositive)
}catch(error){
   console.log("Ocorreu um erro: ", error.message)
}