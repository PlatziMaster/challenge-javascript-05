const pascalTriangle = (lineNumber) => {
  function pascalRecursive(n, array) {
    if (n < 1) return array;
    const prevTier = array[array.length - 1];
    const curTier = [1];
    for (let i = 1; i < prevTier.length; i++) {
      curTier[i] = prevTier[i] + prevTier[i - 1];
    }
    curTier.push(1);
    array.push(curTier);
    return pascalRecursive(n - 1, array);
  }

  const triangle = pascalRecursive(lineNumber, [[1]]);
  return triangle[lineNumber];
}

module.exports = pascalTriangle;
