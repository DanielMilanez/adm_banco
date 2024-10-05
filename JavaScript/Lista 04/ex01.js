const frm = document.querySelector("form");
const response = document.querySelector("h3");

frm.addEventListener("submit", (e)=>{
    const number = Number(frm.inNumber.value);

    // Utilizando o operador ternário
    let result = number % 2 == 0 ? response.innerText = `${number} é par!` : response.innerText = `${number} é impar!`;

    e.preventDefault();
});
