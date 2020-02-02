/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber) => {
  let result = [];

  for (let i = 0; i < lineNumber + 1; i++) {
    result.push(combination(lineNumber, i));
  }
  return result;
}


class FactorialWithMemory {
  constructor() {
    if (!FactorialWithMemory.instance) {
      this.memoria = [1];
      FactorialWithMemory.instance = this;
    }

    return FactorialWithMemory.instance;
  }

  cal(num) {
    if (!this.memoria[num]) {
      this.memoria[num] = num * this.cal(num - 1);
    }
    return this.memoria[num];
  }
}

const combination = (n, k) => {
  let factorial = new FactorialWithMemory();
  let result;
  if (n >= k) {
    result = factorial.cal(n) / (factorial.cal(k) * factorial.cal(n - k));
  }
  return result;
}

module.exports = pascalTriangle;