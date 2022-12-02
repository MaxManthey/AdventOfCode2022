const input = []
require('fs').readFileSync('input.txt', 'utf-8').split("\n").forEach(function(line){input.push(line.split(" "))})

const abc = ["A", "B", "C"]
const xyz = ["X", "Y", "Z"]


function part1() {
  let score = 0
  input.forEach(el => {
    const you = el[0], me = el[1]
    const yourIndex = abc.indexOf(you), myIndex = xyz.indexOf(me)
    score += myIndex + 1
    if(myIndex == yourIndex) score += 3
    else if(myIndex == yourIndex+1 || (myIndex == 0 && yourIndex == 2)) score += 6
  })
  console.log(score)
}


function part2() {
  let score = 0
  input.forEach(el => {
    const you = el[0], me = el[1]
    const yourIndex = abc.indexOf(you)
    if(me == "X")score += ((yourIndex-1)>=0?yourIndex:3) + 0
    if(me == "Y")score += (yourIndex + 1) + 3
    if(me == "Z")score += ((yourIndex+1)<=2?yourIndex+2:1) + 6
  })
  console.log(score)
}


part1()
part2()