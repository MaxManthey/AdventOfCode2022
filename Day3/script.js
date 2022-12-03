const input = []
require('fs').readFileSync('input.txt', 'utf-8').split("\n")
  .forEach(line => input.push(line))


function getScore(item) {
  if(item == item.toUpperCase()) return item.charCodeAt(0) - 38
  return item.charCodeAt(0) - 96
}


function part1() {
  const rucksack = input.map(line => [line.slice(0, line.length / 2), line.slice(line.length / 2, line.length)])
  let score = 0

  for(compartment of rucksack) {
    let leftCompartment = compartment[0].split("")
    let rightCompartment = compartment[1].split("")
    for(item of leftCompartment) {
      if(rightCompartment.includes(item)) {
        score += getScore(item)
        break
      }
    }
  }

  console.log(score)
}


function part2() {
  const allGroups = []
  let score = 0

  let singleGroup = []
  let elfCounter = 0
  input.forEach(elf => {
    singleGroup.push(elf)
    ++elfCounter
    if(elfCounter == 3) {
      allGroups.push(singleGroup.sort((a,b) => a.length - b.length))
      singleGroup = []
      elfCounter = 0
    }
  })

  for(group of allGroups) {
    const elf1 = group[0].split(""), elf2 = group[1].split(""), elf3 = group[2].split("")
    for(item of elf1) {
      if(elf2.includes(item) && elf3.includes(item)) {
        score += getScore(item)
        break
      }
    }
  }

  console.log(score)
}


part1()
part2()