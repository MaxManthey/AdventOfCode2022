const input = require('fs').readFileSync('input.txt', 'utf-8').split("\n")


function part1(allSignals) {
  const cycle = []
  let x = 1
  let result = 0

  for(let i = 1; i <= 220; i++) {
    if(!cycle.length) {
      cycle.push(0)
      const signal = allSignals.shift()
      if(signal.includes('addx')) cycle.push(parseInt(signal.split(" ")[1]))
    }
    if(i == 20 || (i-20)%40 == 0) {
      result += i * x
    }
    x += cycle.shift()
  }
  console.log(result)
}


function part2(allSignals) {
  const crt = [Array(40).fill(' '), Array(40).fill(' '), Array(40).fill(' '), Array(40).fill(' '), Array(40).fill(' '), Array(40).fill(' ')]
  const cycle = []
  let x = 1
  let row = 0

  for(let i = 1; i < 240; i++) {
    const drawPosition = i-1-row*40
    if(!cycle.length) {
      cycle.push(0)
      const signal = allSignals.shift()
      if(signal.includes('addx')) cycle.push(parseInt(signal.split(" ")[1]))
    }
    if(i%40 == 0) {
      ++row
    }
    if(x-1 == drawPosition || x == drawPosition || x+1 == drawPosition) crt[row][drawPosition] = '▓'
    x += cycle.shift()
  }

  for(row of crt) console.log(row.join(""))
}


part1([...input])
part2([...input])