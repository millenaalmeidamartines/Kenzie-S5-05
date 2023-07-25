function somaNumeroDeGraos() {
    let xadrez = 64;
    let totalGraos = 0;
    let graosXadrez = 1;

    for (let n = 1; n <= xadrez; n++) {
        totalGraos += graosXadrez;
        graosXadrez *= 2;
    }
    return totalGraos;
}

let somaDosGraos = somaNumeroDeGraos();

console.log(somaDosGraos);