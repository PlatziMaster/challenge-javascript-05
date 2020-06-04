const factorial = number => {
  var res =1
  
  if(number > 1) {
    for(let i=number; i>0; i--)
      res *= i
  }

  return res
}

const pascalTriangle = (lineNumber) => {  
  let rowNumbers = []

  for (let i = 0; i <= lineNumber; i++) {
    const number = (lineNumber, i) => factorial(lineNumber) / (factorial(i) * factorial(lineNumber - i))
    const num = number(lineNumber, i)
    rowNumbers.push(num)
  }

  return rowNumbers  
}

module.exports = pascalTriangle;