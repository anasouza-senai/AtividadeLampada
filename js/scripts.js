let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

// const lampada = () => {

// };

const gerarImagem = () => {
  let qtdImagem = document.getElementById
  ("inQtdImg").value; // valor informado pelo ususario

  let canvas = document.getElementById("canvas");

  canvas.innerHTML = "";

  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagens" id="lampada" src="img/apagada.jpg"alt="Lânpada">`;

  }
};

const calcular =() => {
 let valPedido = document.getElementById("inValorPedido");
 let perDesconto = document.getElementById("inPercDesc");
 let valDesconto = document.getElementById("inValDesc");
 let valLiquido = document.getElementById("inValFinal");

 if (valPedido.value >= 1500) {
  perDesconto.value = 1.0;
  valDesconto.value = valPedido.value * (1.0 / 100);
  valLiquido.value = valPedido.value - valDesconto.value;
 }else if (valPedido.value >= 2000) {
  perDesconto.value = 1.5;
  valDesconto.value = valPedido.value * (1.5 / 100);
  valLiquido.value = valPedido.value - valDesconto.value;
 }else if (valPedido.value >= 500) {
  perDesconto.value = 0.5;
  valDesconto.value = valPedido.value * (0.5 / 100);
  valLiquido.value = valPedido.value - valDesconto.value;
 }else if (valPedido.value >= 1000) {
  perDesconto.value = 0.8;
  valDesconto.value = valPedido.value * (0.8 / 100);
  valLiquido.value = valPedido.value - valDesconto.value;
 }
};
document.getElementById("mensagem-erro").style.display = "none";
const validaForm = () => {
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  msgErro.innerText = "";

  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "Nome inválido <br>");
  inCli.length < 3 && (msgErro.innerHTML += "Nome com tamanho inválido! <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone informado inválido <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail informado inválido <br>");
  inMail.length < 6 && (msgErro.innerHTML += "E-mail informado inválido <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválido <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Produto inválido <br>");
  inQtd == "" && (msgErro.innerHTML += "Quantidade inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Quantidade negativa <br>");
  inVal == "" && (msgErro.innerHTML += "Valor unitário inválido <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo! <br>");

  msgErro.innerText == ""
    ? (msgErro.style.display = "none"), (msgErro.innerText = "enviado!")
    : ((msgErro.style.display = "block"), msgErro.classList.remove("verde"))

  msgErro.innerText == "enviado!" &&
  ((msgErro.style.display = "block"),
  (msgErro.innerText = "Formulário enviado com sucesso!"),
  (msgErro.classList.add = "verde"));
};


