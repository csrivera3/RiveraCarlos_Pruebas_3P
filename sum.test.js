//CREAR LA PRUEBA QUE FALLE - TDD
const suma = require('./sum');

test('Suma de 1 + 2 debe ser igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
});