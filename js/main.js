function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimennto"));
    //alert("Obrigado por Clicar");
}

function redirecionar(){
    //window.open abre em outra guia.
    window.open("https://www.google.com/");
    
    //window.location.href abre na guia.
    //window.location.href = "https://www.google.com/"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
   elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1, n2){
    return n1, n2;
}

console.log(soma);
*/
/*var count;
for (count = 0; count <=5; count++){
    alert(count);
};*/

/*var count = 1;
while (count <= 5){
    console.log(count);
    count++
}*/


/*var idade = prompt("Qual a sua Idade");
if (idade >= 18 ){
    alert("Maior de Idade");
}else {
    alert("Menor de Idade");
};
*/

// Para comentar em Javascript utiliza-se o // ou */
//var fruta = {nome:"Maçã", cor:"v ermelha"};
//console.log(fruta);

//var lista = ["Maçã", "Melão", "Melancia", "Pera", "Uva"];
//console.log(lista.length);

/* var nome = "Franciom Veloso";
var idade = 24;
var idade2 = 10;
var frase = "Japão é a melhor seleção do mundo";
//alert (nome + "tem" + idade + "anos");
//alert (idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.toUpperCase());
//console.log(frase.replace("Japão" , "Brasil"));
*/