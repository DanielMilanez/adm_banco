// criar uma referencia ao form e ao h3 (onde será exibido a resposta)

// ouvinte: Espera uma ação em um determinado lugar.
// função do js que estamos declarando, ele informa o que será executado quando o submit ocorrer
document.querySelector("form").addEventListener("submit", exec);

function exec(e){
    const value = document.querySelector("#inNome").value;
    document.querySelector("h3").innerText = `Olá, ${value}`;
    e.preventDefault(); // Envia o retorno do form para os dados destino.php
}
