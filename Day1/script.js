const input = []
var currentNum = 0

require('fs')
  .readFileSync('input.txt', 'utf-8').toString().trim().split('\n')
  .forEach(line => {
    const num = parseInt(line)
    if(isNaN(num)) {
      input.push(currentNum)
      currentNum = 0
    } else {
      currentNum += num
    }
  })

const caloriesArr = input.sort((a, b) => b - a)


function part1() {
  console.log(caloriesArr[0])
}


function part2() {
  console.log(caloriesArr[0] + caloriesArr[1] + caloriesArr[2])
}


part1()
part2()