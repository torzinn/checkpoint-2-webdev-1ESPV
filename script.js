// // // // // // // // // //Questão 1 ---

// // // // // // // // // let tarefaConcluida = true;

// // // // // // // // // if (tarefaConcluida === true) {
// // // // // // // // //     console.log("A tarefa está concluída!");
// // // // // // // // // } else {
// // // // // // // // //     console.log("A tarefa não foi concluída.");
// // // // // // // // // }


// // // // // // // // // Questão 2 ---


// // // // // // // // let prioridade = 2; 

// // // // // // // // if (prioridade === 1) {
// // // // // // // //     console.log("Prioridade Baixa");
// // // // // // // // } else if (prioridade === 2) {
// // // // // // // //     console.log("Prioridade Média");
// // // // // // // // } else if (prioridade === 3) {
// // // // // // // //     console.log("Prioridade Alta");
// // // // // // // // } else {
// // // // // // // //     console.log("Valor de prioridade inválido");
// // // // // // // // }


// // // // // // // //Questão 3

// // // // // // // let diaSemana = new Date().getDay();

// // // // // // // switch (diaSemana) {
// // // // // // //   case 0:
// // // // // // //     console.log("Domingo");
// // // // // // //     break;
// // // // // // //   case 1:
// // // // // // //     console.log("Segunda-feira");
// // // // // // //     break;
// // // // // // //   case 2:
// // // // // // //     console.log("Terça-feira");
// // // // // // //     break;
// // // // // // //   case 3:
// // // // // // //     console.log("Quarta-feira");
// // // // // // //     break;
// // // // // // //   case 4:
// // // // // // //     console.log("Quinta-feira");
// // // // // // //     break;
// // // // // // //   case 5:
// // // // // // //     console.log("Sexta-feira");
// // // // // // //     break;
// // // // // // //   case 6:
// // // // // // //     console.log("Sábado");
// // // // // // //     break;
// // // // // // //   default:
// // // // // // //     console.log("Dia inválido");
// // // // // // // }

// // // // // // //Questão 4 ---

// // // // // // for (let i = 0; i < 10; i++) {
// // // // // //   console.log(i);
// // // // // // }

// // // // // //Questão 5 -- 

// // // // // let i = 1;
// // // // // let soma = 0;

// // // // // while (i <= 5) {
// // // // //   soma += i;
// // // // //   i++;
// // // // // }

// // // // // console.log("Soma total:", soma);

// // // // //Questão 6 ---

// // // // let i = 3;

// // // // do {
// // // //   console.log(i);
// // // //   i--;
// // // // } while (i >= 1);

// // // // console.log("FIM!");

// // // //Questão 7 --- 

// // // function verificarIdade(idade) {
// // //     if (idade < 18) {
// // //         return "Menor de idade";
// // //     } else if (idade >= 18 && idade < 60) {
// // //         return "Maior de idade";
// // //     } else {
// // //         return "Idoso";
// // //     }
// // // }

// // // console.log(verificarIdade(10));
// // // console.log(verificarIdade(18)); 
// // // console.log(verificarIdade(45));  
// // // console.log(verificarIdade(60));  
// // // console.log(verificarIdade(75));  

// // //Questão 8 ---

// // let temSenhaCorreta = false; 
// // let temBiometriaAutenticada = false; 

// // let acessoPermitido = temSenhaCorreta || temBiometriaAutenticada;

// // console.log("Acesso permitido:", acessoPermitido);
// // console.log("Acesso negado:", !acessoPermitido);

// //Questão 9 ---

// let tarefas = "Estudar matemática, Fazer exercícios, Ler livro, Estudar programação, Jogar futebol";

// let arrayTarefas = tarefas.split(", ");

// let tarefasFormatadas = arrayTarefas.join(" | ");

// let contemEstudar = tarefas.includes("Estudar");

// console.log("Array de tarefas:", arrayTarefas);
// console.log("Tarefas formatadas:", tarefasFormatadas);
// console.log("Contém 'Estudar'? :", contemEstudar);

//Questão 10 

function calcularAreaCirculoAleatorio() {
   
    let raio = Math.random() * (15 - 5) + 5;

    let area = Math.PI * Math.pow(raio, 2);

    console.log("Raio:", raio.toFixed(2));
    console.log("Área do círculo:", area.toFixed(2));
}

calcularAreaCirculoAleatorio();
