const input = []
require('fs').readFileSync('input.txt', 'utf-8').split("\n").forEach(line => input.push(line.split(",")))


function getNums(section) {
  return section.split("-").map(digit => parseInt(digit))
}


function overlapping(range1, range2) {
  if(range1[0] <= range2[0] && range1[1] >= range2[1]) return true
  else return false
}


function notOverlapping(range1, range2) {
  if((range1[0] <= range2[0] && range1[1] >= range2[0]) || (range1[0] <= range2[1] && range1[1] >= range2[1])) return true
  else return false
}


function solution() {
  let scorePart1 = 0
  let scorePart2 = 0
  
  input.forEach(pair => {
    const leftElf = getNums(pair[0]), rightElf = getNums(pair[1])
    if(overlapping(leftElf, rightElf) || overlapping(rightElf, leftElf)) ++scorePart1
    if(notOverlapping(leftElf, rightElf) || notOverlapping(rightElf, leftElf)) ++scorePart2
  })
  
  console.log("Part1:", scorePart1, "Part2:", scorePart2)
}


solution()
