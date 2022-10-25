function traduzir() {
  var p = document.getElementById("paragrafo");
  if (p.innerHTML.match("Olá")) {
    p.innerHTML = "Hello";
    p.setAttribute("style", "font-weight: 900;color:#cc3300;");
  } else {
    p.innerHTML = "Olá";
    p.setAttribute("style", "font-weight: 900;color:#003300;");
  }
}

let cont = 0;

function interruptor() {
  const contador = document.getElementById("contador");
  var lamp = document.getElementById("lampada");
  if (
    lamp.src.match(
      "https://img.freepik.com/fotos-premium/modelo-3d-de-uma-lampada-transparente-apagada-em-um-fundo-preto-isolado-fundo-escuro_379368-286.jpg"
    )
  ) {
    lamp.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStETmUIRdkibAGAP9WSh7rf3ypPfGDYp_Mu3MvKjKLYA&s";
    cont++;
  } else if (cont >= 5) {
    lamp.src =
      "https://static5.depositphotos.com/1000128/418/i/600/depositphotos_4186359-stock-photo-broken-lamp.jpg";
  } else {
    lamp.src =
      "https://img.freepik.com/fotos-premium/modelo-3d-de-uma-lampada-transparente-apagada-em-um-fundo-preto-isolado-fundo-escuro_379368-286.jpg";
    cont++;
  }
  contador.innerHTML = cont;
}

function addQuadrado() {
  var pquadrado = document.getElementById("quadrado");

  var quadrado = document.createElement("div"); // criando um novo div
  quadrado.setAttribute(
    "style",
    "width:100px;height:100px;background-color:red;margin:5px;"
  );

  pquadrado.appendChild(quadrado);
}

function removeQuadrado() {
  var pquadrado = document.querySelector("#quadrado");

  var fquadrado = document.querySelector("#quadrado div");

  pquadrado.removeChild(fquadrado);
}

function verificar() {
  var nome = prompt("Digite seu nome");
  document.getElementById("nome").innerHTML = nome;

  var idade = prompt("digite sua idade");
  document.getElementById("idade").innerHTML = idade;
}
