const frm = document.querySelector("form");
const response = document.querySelector("h3");

function verificaTriangulo(){
    const ladoA = Number(frm.ladoA.value);
    const ladoB = Number(frm.ladoB.value);
    const ladoC = Number(frm.ladoC.value);

    let formarTriangulo = false;
    let veirifa = ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB ? formarTriangulo = true : formarTriangulo = false; 
    
    if (formarTriangulo){
        if (ladoA == ladoB && ladoB == ladoC){
            response.innerText = `Podem formar um triângulo Equilatero`;
        }
        else if (ladoA != ladoB && ladoB != ladoC){
            response.innerText = `Podem formar um triângulo Escaleno`;
        }
        else{
            response.innerText = `Podem formar um triângulo Isóceles`;
        }
    }
    else{
        response.innerText = `Valores inseridos, não podem formar um tirângulo`;
    }
}
