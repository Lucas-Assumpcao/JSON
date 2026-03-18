let user = [

{id : 1, nome: "Tyranitar", numero: 248, tipo: "Pedra/Noturno", habilidades: ["Mordida", "Pedrada", "Triturar", "Terremoto"], foto: "tyranitar.png"},
{id : 2, nome: "Charizard", numero: 6, tipo: "Fogo/Voador", habilidades: ["Lança-chamas", "Assa-dor", "Bola de Fogo", "Voo"], foto: "charizard.png"},
{id : 3, nome: "Blastoise", numero: 9, tipo: "Água", habilidades: ["Jato d'Água", "Hidrobomba", "Surf", "Nevasca"], foto: "blastoise.png"},
{id : 4, nome: "Venusaur", numero: 3, tipo: "Planta/Venenoso", habilidades: ["Chicote de Vinha", "Semente Sombria", "Raio Solar", "Florescer"], foto: "venusaur.png"}

];
function buscarUser(){

    let idDigitado = document.getElementById("idUser").value;

    let userEncontrado = user.find(u => u.id == idDigitado);
    if(userEncontrado){
        document.getElementById("nome").innerText = userEncontrado.nome;
        document.getElementById("numero").innerText = userEncontrado.numero;
        document.getElementById("tipo").innerText = userEncontrado.tipo;
        document.getElementById("habilidades").innerText = userEncontrado.habilidades.join(", ");
        document.getElementById("imagem").innerHTML = `<img src="${userEncontrado.foto}" alt="${userEncontrado.nome}">`;
    }else{
        document.getElementById("nome").innerText = "User not found";
        document.getElementById("numero").innerText = "";
        document.getElementById("tipo").innerText = "";
        document.getElementById("habilidades").innerText = "";
        document.getElementById("imagem").innerHTML = "";
    }

    
}