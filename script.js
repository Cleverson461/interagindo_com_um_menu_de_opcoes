/*
    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na Lista 
    2. Mostrar itens cadastrados
    3. Sair do programa.


    ----------------------------------------------------------------

    O programa deverá capturar o número digitado peli usuário e mostrar o seguintes cenários: 

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá mostrar os itens cadastrados
      Se não houver nenhum item cadastrado, mostrar a mensagem:
        "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada

*/

/*
  Dados de entrada do usuário
  1. Número desejado
  2. Item da lista


  Variáveis
  1. opção digitada
  2. lista de itens

*/

let opcao;
let listaDeItems = [];

while (opcao !== 3) {
  opcao = Number(
    prompt(` 
  Olá usuário! Digite o número da opção desejada
  
  1. Cadastrar um item na Lista 
  2. Mostrar itens cadastrados
  3. Sair do programa.`)
  );

  switch (opcao) {
    case 1:
      let item = prompt("Digite o item");
      listaDeItems.push(item);
      break;

    case 2:
      if (listaDeItems.lenght === 0) {
        alert("Não existem itens cadastrados");
      } else {
        alert(listaDeItems);
      }
      break;

    case 3:
      alert("Saindo do programa");
      break;
      
    default:
      alert("Opção inválida");
      break;
  }
}
