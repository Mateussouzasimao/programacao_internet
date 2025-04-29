//EX02
let nota1=prompt("Digite a primeira nota: ")
let nota2=prompt("Digite a segunda nota: ")
let nota3=prompt("Digite a terceirpa nota: ")


document.write("Média ponderada: ",((nota1*2)+(nota2*3)+(nota3*5))/10,"<br>")

// Cria o link para voltar à página inicial
const linkVoltar = document.createElement("a");
linkVoltar.textContent = "Voltar para a Página Inicial";
linkVoltar.href = "index.html"; // Substitua pelo caminho do seu arquivo HTML
linkVoltar.style.display = "block"; // Adiciona estilo para melhorar visualização
linkVoltar.style.marginTop = "20px"; // Espaçamento acima do link
document.body.appendChild(linkVoltar);
