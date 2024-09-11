function processName(nome,callback){
    if(typeof nome !== 'string'){
        callback(new Error('O nome deve ser uma string'));
}
    if(nome.length === 0){
        callback(new Error("O nome não pode estar vazio"));
        return;
    }
    callback(null,"Nome processado com sucesso")
}

processName("Marcelo", (error,result) => {
    if(error){
        console.log("Ocorre um problema:", error.message)
    }else{
        console.log(result)
    }
}
)