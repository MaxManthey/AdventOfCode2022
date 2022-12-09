const input = []
require('fs').readFileSync('input.txt', 'utf-8').split("\n")
  .map(line => line.split(" ")).map(el => [el[0], parseInt(el[1])])
  .forEach(el => {for(let i = 0; i < el[1]; i++) input.push(el[0])})


function moveTail(rowH, colH, rowT, colT) {
  const vectorH = [rowH-rowT, colH-colT]

  if(vectorH[0] == 2) {rowT+=1}
  if(vectorH[0] == -2) {rowT-=1}
  if(vectorH[1] == 2) {colT+=1}
  if(vectorH[1] == -2) {colT-=1}
  if(vectorH[0] == 1 && Math.abs(vectorH[1]) == 2) {rowT+=1}
  if(vectorH[0] == -1 && Math.abs(vectorH[1]) == 2) {rowT-=1}
  if(vectorH[1] == 1 && Math.abs(vectorH[0]) == 2) {colT+=1}
  if(vectorH[1] == -1 && Math.abs(vectorH[0]) == 2) {colT-=1}

  return [rowT,colT]
}


function part1 () {
  const visitedPositions = new Set()
  let rowH = 0, colH = 0
  let rowT = 0, colT = 0

  for(move of input) {
    if(move == 'R') rowH += 1
    else if(move == 'L') rowH -= 1
    else if(move == 'U') colH += 1
    else if(move == 'D') colH -= 1

    const res = moveTail(rowH, colH, rowT, colT)
    rowT = res[0], colT = res[1]

    visitedPositions.add(rowT+','+colT)
  }

  console.log(visitedPositions.size)
}


function part2() {
  const visitedPositions = new Set()
  let rowH = 0, colH = 0
  let row1 = 0, col1 = 0
  let row2 = 0, col2 = 0
  let row3 = 0, col3 = 0
  let row4 = 0, col4 = 0
  let row5 = 0, col5 = 0
  let row6 = 0, col6 = 0
  let row7 = 0, col7 = 0
  let row8 = 0, col8 = 0
  let rowT = 0, colT = 0

  for(move of input) {
    if(move == 'R') rowH += 1
    else if(move == 'L') rowH -= 1
    else if(move == 'U') colH += 1
    else if(move == 'D') colH -= 1

    const one = moveTail(rowH, colH, row1, col1)
    row1 = one[0], col1 = one[1]
    const two = moveTail(row1, col1, row2, col2)
    row2 = two[0], col2 = two[1]
    const three = moveTail(row2, col2, row3, col3)
    row3 = three[0], col3 = three[1]
    const four = moveTail(row3, col3, row4, col4)
    row4 = four[0], col4 = four[1]
    const five = moveTail(row4, col4, row5, col5)
    row5 = five[0], col5 = five[1]
    const six = moveTail(row5, col5, row6, col6)
    row6 = six[0], col6 = six[1]
    const seven = moveTail(row6, col6, row7, col7)
    row7 = seven[0], col7 = seven[1]
    const eight = moveTail(row7, col7, row8, col8)
    row8 = eight[0], col8 = eight[1]
    const tail = moveTail(row8, col8, rowT, colT)
    rowT = tail[0], colT = tail[1]

    visitedPositions.add(rowT+','+colT)
  }

  console.log(visitedPositions.size)
}


part1()
part2()