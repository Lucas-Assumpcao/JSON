let user = [

{id : 1, nome: "Maria", idade: 47},
{id : 2, nome: "João", idade: 27},
{id : 3, nome: "Vanessa", idade: 21},
{id : 4, nome: "Jorge", idade: 71},

];
function buscarUser(){

    let idDigitado = document.getElementById("idUser").value;

    let userEncontrado = user.find(u => u.id == idDigitado);
    if(userEncontrado){
        document.getElementById("nome").innerText = userEncontrado.nome;
        document.getElementById("idade").innerText = userEncontrado.idade;
    }else{
        document.getElementById("nome").innerText = "User not found";
        document.getElementById("idade").innerText = "";
    }

    
}