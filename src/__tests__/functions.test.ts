import { calculoPotencial }  from '../functions';

//Caminho 1
test('Base != 0 e Expoente < 0', () => {
  expect(calculoPotencial(1,-2)).toEqual(1);
  expect(calculoPotencial(-1,-3)).toEqual(-1);
  expect(calculoPotencial(10,-1)).toEqual(0.1);
  expect(calculoPotencial(10,-4)).toEqual(0.0001);
})
//Caminho 2
test('Base = 0 e Expoente < 0', () => {
  expect(calculoPotencial(0,-1)).toEqual("A potencia é um valor finito");
  expect(calculoPotencial(0,-10)).toEqual("A potencia é um valor finito");
})
//Caminho 3
test('Base != 0 e Expoente = 0', () => {
  expect(calculoPotencial(1,0)).toEqual(1);
  expect(calculoPotencial(10,0)).toEqual(1);
  expect(calculoPotencial(-1,0)).toEqual(1);
  expect(calculoPotencial(-10,0)).toEqual(1);
})
//Caminho 4
test('Base != 0 e Expoente > 0', () => {
  expect(calculoPotencial(1,2)).toEqual(1);
  expect(calculoPotencial(-1,3)).toEqual(-1);
  expect(calculoPotencial(10,1)).toEqual(10);
  expect(calculoPotencial(10,10)).toEqual(10000000000);
})
//Caminho 5
test('Base = 0 e Expoente >= 0', () => {
  expect(calculoPotencial(0,0)).toEqual("A potencia é um valor finito");
  expect(calculoPotencial(0,1)).toEqual("A potencia é um valor finito");
  expect(calculoPotencial(0,1000)).toEqual("A potencia é um valor finito");
})