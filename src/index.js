/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */


const pascalTriangle = (lineNumber) => {
  const n = lineNumber;
  const a = [];
  const b = [];
  for(i=0;i<=n;i++) {
    a.push(0)
  }
  a[0] = 1
  for(i=1;i<=n;i++) {
    for(j=1;j<=i;j++) {
      b[j] = a[j-1] + a[j];
    }
    for(j=1;j<=i;j++) {
      a[j] = b[j]
    }
  }
  return a

}

module.exports = pascalTriangle;