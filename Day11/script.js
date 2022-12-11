class Monkey {
  constructor(items, operationType, operationNumber, testNum, trueMonkey, falseMonkey) {
    this.items = items
    this.operationType = operationType
    this.operationNumber = operationNumber
    this.testNum = testNum
    this.trueMonkey = trueMonkey
    this.falseMonkey = falseMonkey
    this.amountVisited = 0
  }
}

const allMonkeys = []
let modu = 1
require('fs').readFileSync('input.txt', 'utf-8').split("\n\n").map(el => el.split('\n'))
  .forEach(m => {
    const items = m[1].replace('  Starting items: ', '').split(', ').map(el => parseInt(el))
    const [operationType, operationNumber] = m[2].replace('  Operation: new = old ', '').split(' ')
    const testNum = parseInt(m[3].replace('  Test: divisible by ', ''))
    modu *= testNum
    const trueMonkey = parseInt(m[4].replace('    If true: throw to monkey ', ''))
    const falseMonkey = parseInt(m[5].replace('    If false: throw to monkey ', ''))
    allMonkeys.push(new Monkey(items, operationType, operationNumber, testNum, trueMonkey, falseMonkey))
  })


function part1(monkeys) {
  for(let i = 0; i < 20; i++) {
    for(monkey of monkeys) {
      monkey.amountVisited += monkey.items.length
      while(monkey.items.length) {
        const item = monkey.items.shift()
        const operationNumber = monkey.operationNumber == 'old' ? item : parseInt(monkey.operationNumber)
        let worryLevel = Math.floor((monkey.operationType == '+' ? item+operationNumber : item*operationNumber)/3)
        if(worryLevel % monkey.testNum  == 0) monkeys[monkey.trueMonkey].items.push(worryLevel)
        else monkeys[monkey.falseMonkey].items.push(worryLevel)
      }
    }
  }
  const sortedMonkeys = monkeys.sort((a, b) => b.amountVisited - a.amountVisited)
  console.log(sortedMonkeys[0].amountVisited * sortedMonkeys[1].amountVisited)
}


function part2(monkeys) {
  for(let i = 0; i < 10000; i++) {
    for(monkey of monkeys) {
      monkey.amountVisited += monkey.items.length
      while(monkey.items.length) {
        const item = monkey.items.shift()
        const operationNumber = monkey.operationNumber == 'old' ? item : parseInt(monkey.operationNumber)
        let worryLevel = (monkey.operationType == '+' ? item+operationNumber : item*operationNumber) % modu
        if(worryLevel % monkey.testNum  == 0) monkeys[monkey.trueMonkey].items.push(worryLevel)
        else monkeys[monkey.falseMonkey].items.push(worryLevel)
      }
    }
  }
  const sortedMonkeys = monkeys.sort((a, b) => b.amountVisited - a.amountVisited)
  console.log(sortedMonkeys[0].amountVisited * sortedMonkeys[1].amountVisited)
}


part1(JSON.parse(JSON.stringify(allMonkeys)))
part2(JSON.parse(JSON.stringify(allMonkeys)))