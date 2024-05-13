const player1 = prompt("Informe o nome do primeiro jogador: ");
const player2 = prompt("Informe o nome do segundo jogador: ");

// alert("JOGADOR  " + player1 + "  COMEÇA   A   PARTIDA!");

function colorir_acertos(x, y, z) {
  l1 = document.getElementById("q" + x);
  l1.style.color = "green";

  l2 = document.getElementById("q" + y);
  l2.style.color = "green";

  l3 = document.getElementById("q" + z);
  l3.style.color = "green";
}

let matriz_confirmacao = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

let jogador_da_vez = player1;

function verificacao(matriz_confirmacao) {
  ///funcao que ira verificar se ha ganhadores
  for (let i = 0; i < matriz_confirmacao.length; i++) {
    let horizontal = [];

    for (let j = 0; j < matriz_confirmacao[i].length; j++) {
      horizontal.push(matriz_confirmacao[i][j]);
    }
    //verificacao horizontal
    if (horizontal[0] == horizontal[1] && horizontal[1] == horizontal[2]) {
      alert("Parabéns jogador " + horizontal[1] + " venceu o jogo!");
      if (i == 0) {
        colorir_acertos(1, 2, 3);
      }
      if (i == 1) {
        colorir_acertos(4, 5, 6);
      }
      if (i == 2) {
        colorir_acertos(7, 8, 9);
      }
      alert("PRECIONE F5 PARA COMEÇAR OUTRA PARTIDA!");
    }
  }
  ///verificacao verticalmente
  if (
    matriz_confirmacao[0][0] == matriz_confirmacao[1][0] &&
    matriz_confirmacao[1][0] == matriz_confirmacao[2][0]
  ) {
    alert("Parabéns jogador " + matriz_confirmacao[0][0] + " venceu o jogo!");
    alert("PRECIONE F5 PARA COMEÇAR OUTRA PARTIDA!");
    colorir_acertos(1, 4, 7);
  }
  if (
    matriz_confirmacao[0][1] == matriz_confirmacao[1][1] &&
    matriz_confirmacao[1][1] == matriz_confirmacao[2][1]
  ) {
    alert("Parabéns jogador " + matriz_confirmacao[0][1] + " venceu o jogo!");
    alert("PRECIONE F5 PARA COMEÇAR OUTRA PARTIDA!");
    colorir_acertos(2, 5, 8);
  }
  if (
    matriz_confirmacao[0][2] == matriz_confirmacao[1][2] &&
    matriz_confirmacao[1][2] == matriz_confirmacao[2][2]
  ) {
    alert("Parabéns jogador " + matriz_confirmacao[0][2] + " venceu o jogo!");
    alert("PRECIONE F5 PARA COMEÇAR OUTRA PARTIDA!");
    colorir_acertos(3, 6, 9);
  }
  ///verificacao diagonalmente
  if (
    matriz_confirmacao[0][2] == matriz_confirmacao[1][1] &&
    matriz_confirmacao[1][1] == matriz_confirmacao[2][0]
  ) {
    alert("Parabéns jogador " + matriz_confirmacao[0][2] + " venceu o jogo!");
    alert("PRECIONE F5 PARA COMEÇAR OUTRA PARTIDA!");
    colorir_acertos(3, 5, 7);
  }
  if (
    matriz_confirmacao[0][0] == matriz_confirmacao[1][1] &&
    matriz_confirmacao[1][1] == matriz_confirmacao[2][2]
  ) {
    alert("Parabéns jogador " + matriz_confirmacao[0][2] + " venceu o jogo!");
    alert("PRECIONE F5 PARA COMEÇAR OUTRA PARTIDA!");
    colorir_acertos(1, 5, 9);
  }
}

function quadrado1() {
  const quadrado_clicado = document.getElementById("q1");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[0][0] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[0][0] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}

function quadrado2() {
  const quadrado_clicado = document.getElementById("q2");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[0][1] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[0][1] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}

function quadrado3() {
  const quadrado_clicado = document.getElementById("q3");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[0][2] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[0][2] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}

function quadrado4() {
  const quadrado_clicado = document.getElementById("q4");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[1][0] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[1][0] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}

function quadrado5() {
  const quadrado_clicado = document.getElementById("q5");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[1][1] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[1][1] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}

function quadrado6() {
  const quadrado_clicado = document.getElementById("q6");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[1][2] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[1][2] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}

function quadrado7() {
  const quadrado_clicado = document.getElementById("q7");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[2][0] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[2][0] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}

function quadrado8() {
  const quadrado_clicado = document.getElementById("q8");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[2][1] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[2][1] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}

function quadrado9() {
  const quadrado_clicado = document.getElementById("q9");
  if (quadrado_clicado.innerText == "") {
    if (jogador_da_vez == player1) {
      quadrado_clicado.innerText = "X";
      jogador_da_vez = player2;
      matriz_confirmacao[2][2] = "X";
    } else {
      quadrado_clicado.innerText = "O";
      jogador_da_vez = player1;
      matriz_confirmacao[0][0] = "O";
      matriz_confirmacao[2][2] = "O";
    }
    verificacao(matriz_confirmacao);
  }
}
