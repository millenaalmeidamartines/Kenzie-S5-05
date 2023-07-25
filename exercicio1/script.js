function fibonacciNumbers() {
    let atual = 0;
    let anterior = 1;
    let próximo = 0;

    for (let i = 1; i <= 15; i++) {
      console.log(atual);
  
      próximo = atual + anterior;
      anterior = atual;
      atual = próximo;
    }
  }

  fibonacciNumbers();
  
  