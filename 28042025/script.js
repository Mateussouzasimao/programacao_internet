//EX01
let x=prompt("Digite um número: ")
let y=prompt("Digite outro número: ")

document.write("expressão calculada (X + Y*5 - 3): ", (x + y*5 - 3),"<br>")

// Cria o link para voltar à página inicial
const linkVoltar = document.createElement("a");
linkVoltar.textContent = "Voltar para a Página Inicial";
linkVoltar.href = "index.html"; // Substitua pelo caminho do seu arquivo HTML
linkVoltar.style.display = "block"; // Adiciona estilo para melhorar visualização
linkVoltar.style.marginTop = "20px"; // Espaçamento acima do link
document.body.appendChild(linkVoltar);