/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let triangulo = [];
  for (let i = 0; i <= lineNumber; i++) {
    let array = [];
    if (i <= 1) {
      for (let x = 0; x <= i; x++) {
        array.push(1);
      }
      triangulo.push(array);
    } else {
      const index = i - 1;
      const base = triangulo[index];
      let newArray = [];
      const itemsinbase = base.length - 1;
      let item = 0;
      //////
      for (y of base) {
        if (item === 0) {
          newArray.push(1);
        } else if (item === itemsinbase) {
          const a = item - 1;
          const suma = base[a] + base[item];
          newArray.push(suma);
          newArray.push(1);
        } else {
          const a = item - 1;
          const suma = base[a] + base[item];
          newArray.push(suma);
        }
        item = item + 1;
      }
      triangulo.push(newArray);
      /////
    }
  }
  return triangulo[lineNumber];
};

module.exports = pascalTriangle;
