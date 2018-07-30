/*//function mudaCor(){
    var corAmarela = document.getElementById('div1');
    corAmarela.style.background="#bfff00";
    corAmarela.innerHTML=//"<p> A cor magicamente mudou <p/>";

}

function mudarCor(){
    var corVerde = document.getElementById('div2');
    corVerde.style.background="#80ff00";
    corVerde.innerHTML=//"<p> A cor magicamente mudou <p/>";

}

function mudouCor(){
    var corAzul = document.getElementById('div3');
    corAzul.style.background="#40ff00";
    corAzul.innerHTML=//"<p> A cor magicamente mudou <p/>";

}

function mudaraCor(){
    var corVerde = document.getElementById('div4');
    corVerde.style.background="#bf00ff";
    corVerde.innerHTML=//"<p> A cor magicamente mudou <p/>";

}

function voltar1(){
	var corAmarela = document.getElementById('div1');
	corAmarela.style.background="yellow";

}

function voltar2(){
	var corVerde = document.getElementById('div2');
	corVerde.style.background="green";

}

function voltar3(){
	var corAzul = document.getElementById('div3');
	corAzul.style.background="blue";

}

function voltar4(){
	var corPreto = document.getElementById('div4');
	corPreto.style.background="black";

}*/

function mudarCor1(){
	var corPreto = document.getElementById("div1");
	corPreto.style.background="green";
}
function voltarCor1(){
	var cor1=document.getElementById("div1")
	cor1.style.background="yellow"
}

function mudarCor2(){
	var corAmarela = document.getElementById("div2");
	corAmarela.style.background="pink";
}
function voltarCor2(){
	var cor2=document.getElementById("div2")
	cor2.style.background="red"
}

function mudarCor3(){
	var corAzul = document.getElementById("div3");
	corAzul.style.background="#8000ff";
}
function voltarCor3(){
	var cor3=document.getElementById("div3")
	cor3.style.background="blue"
}
function mudarCor4(){
	var corVerde=document.getElementById("div4")
	corVerde.style.background="#2C3E50"
}
function voltarCor4(){
	var cor4=document.getElementById("div4")
	cor4.style.background="green"
}

function idade(){
	var anoAtual = 2018;
	var form = document.getElementById('formulario');
	var ano = form.nascimento.value;
	var nome = form.nome.value;

	alert("O seu nome é "+ nome);
    var idade = anoAtual-ano;
	alert("sua idade é "+idade+" anos")

	var escreve = document.getElementById('div1')
	escreve.innerHTML="<p> Olá "+nome+" sua idade é "+idade+"</p>";

}
