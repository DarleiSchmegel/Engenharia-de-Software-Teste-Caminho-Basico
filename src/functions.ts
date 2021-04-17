function calculoPotencial(Base:number,Expoente:number){
  var Potencial:number;
  var Resultado:number;

  if (Expoente < 0 ){
    Potencial = 0 - Expoente;
  }
  else {
    Potencial = Expoente;
  }

  Resultado = 1;

  while (Potencial != 0 ){
    Resultado = Resultado * Base;
    Potencial = Potencial - 1;
  }

  if (Expoente < 0 && Base != 0){
    Resultado = 1 / Resultado;
  }
  else{
    if(Base == 0)
      return "A potencia é um valor finito"
  }
    return Resultado;
}

export { calculoPotencial }