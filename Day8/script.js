function isVisibleLeftRight(row, item, forest) {
  let leftVisible = true
  let rightVisible = true
  for(let i = 0; i < item; i++) {
    if(forest[row][i] >= forest[row][item]) leftVisible = false
  }
  for(let i = item + 1; i < forest.length; i++) {
    if(forest[row][i] >= forest[row][item]) rightVisible = false
  }
  return leftVisible || rightVisible
}

function part1() {
  const forest = require('fs').readFileSync('input.txt', 'utf-8').split("\n")
  .map(line => line.split("").map(el => parseInt(el)))
  const rotatedForest = forest[0].map((_, colIndex) => forest.map(row => row[colIndex]))

  let isVisible = 0
  for(let i = 0; i < forest.length; i++) {
    for(let j = 0; j < forest[i].length; j++) {
      if(i == 0 || j == 0) ++isVisible
      else if(i == (forest.length-1) || j == (forest.length - 1)) ++isVisible
      else if(isVisibleLeftRight(i, j, forest) || isVisibleLeftRight(j, i, rotatedForest)) ++isVisible
    }
  }

  console.log(isVisible)
}


function getScoreRight(item, forestRow) {
  if(item == 0 || item == forestRow.length-1) return 0
  let scoreRight = 0
    for(let i = item+1; i < forestRow.length; i++) {
      ++scoreRight
      if(forestRow[item] <= forestRow[i]) break
    }
  return scoreRight
}

function part2() {
  const forest = require('fs').readFileSync('input.txt', 'utf-8').split("\n")
  .map(line => line.split("").map(el => parseInt(el)))
  const rotatedForest = forest[0].map((_, colIndex) => forest.map(row => row[colIndex]))

  let scenicScore = 0

  for(let i = 0; i < forest.length; i++) {
    for(let j = 0; j < forest.length; j++) {
      const currentScore = getScoreRight(j, forest[i]) * getScoreRight(forest.length-1-j, forest[i].reverse()) * getScoreRight(i, rotatedForest[j]) * getScoreRight(forest.length-1-i, rotatedForest[j].reverse())
      forest[i].reverse()
      rotatedForest[j].reverse()
      if(currentScore > scenicScore){
        scenicScore = currentScore
      }
    }
  }
  console.log(scenicScore)
}


part1()
part2()
