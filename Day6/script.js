const input = require('fs').readFileSync('input.txt', 'utf-8').split("")


function part1() {
  const message = JSON.parse(JSON.stringify(input))
  const compare = []
  for(let i = 0; i < 3; i++) {
    compare.push(message.shift())
  }
  
  let index = 3
  for(let i = 0; i < message.length; i++) {
    ++index
    compare.push(message.shift())
    if(new Set(compare).size == 4) break
    compare.shift()
  }
  console.log(index)
}


function part2() {
  const message = JSON.parse(JSON.stringify(input))
  const compare = []
  for(let i = 0; i < 13; i++) {
    compare.push(message.shift())
  }
  
  let index = 13
  while(message.length > 0) {
    ++index
    compare.push(message.shift())
    if(new Set(compare).size == 14) break
    compare.shift()
  }
  console.log(index)
}


part1()
part2()