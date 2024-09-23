// Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e posterior.
num = Number(prompt("Digite um número: "));
posterior = num + 1;
anterior = num - 1;

alert(`O sucessor de ${num} é ${posterior} e o anterior é ${anterior}`);
