const stacks = [
  ["S", "C", "V", "N"],
  ["Z", "M", "J", "H", "N", "S"],
  ["M", "C", "T", "G", "J", "N", "D"],
  ["T", "D", "F", "J", "W", "R", "M"],
  ["P", "F", "H"],
  ["C", "T", "Z", "H", "J"],
  ["D", "P", "R", "Q", "F", "S", "L", "Z"],
  ["C", "S", "L", "H", "D", "F", "P", "W"],
  ["D", "S", "M", "P", "F", "N", "G", "Z"]
]
const input = []
require('fs').readFileSync('input.txt', 'utf-8').split("\n").forEach(line => {
  const parsedLine = line.split(" ").map(el => parseInt(el))
  input.push([parsedLine[1], parsedLine[3], parsedLine[5]])
})


function printStacks(partnum, stackCp) {
  let result = ""
  stackCp.forEach(stack => result += stack[stack.length-1])
  console.log("Part", partnum + ":", result)
}


function solution() {
  const part1Stack = JSON.parse(JSON.stringify(stacks))
  const part2Stack = JSON.parse(JSON.stringify(stacks))

  for(line of input) {
    const amount = line[0], origin = line[1]-1, destination = line[2]-1
    const tmpStack = []
    for(let i = 0; i < amount; i++) {
      part1Stack[destination].push(part1Stack[origin].pop())
      tmpStack.push(part2Stack[origin].pop())
    }
    for(let i = 0; i < amount; i++) {
      part2Stack[destination].push(tmpStack.pop())
    }
  }
  
  printStacks(1, part1Stack)
  printStacks(2, part2Stack)
}


solution()
