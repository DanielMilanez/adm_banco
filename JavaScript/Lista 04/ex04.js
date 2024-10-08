const frm = document.querySelector("form");
const response = document.querySelector("h3");

function verificaTriangulo(){
    const ladoA = Number(frm.ladoA.value);
    const ladoB = Number(frm.ladoB.value);
    const ladoC = Number(frm.ladoC.value);

    if(ladoA + ladoB > ladoC){
        response.innerText = "Pode formar um triângulo!";
    }
    else if (ladoC + ladoA > ladoB){
        response.innerText = "Pode formar um triângulo!";
    }
    else if(ladoC + ladoB > ladoA){
        response.innerText = "Pode formar um triângulo!";
    }
    else{
        response.innerText = "Não pode formar um triângulo!";
    }
}
