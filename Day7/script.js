class TreeNode {
  constructor(value, type, parent = null) {
    this.value = value
    this.descendants = []
    this.type = type
    this.parent = parent
  }
}
const parentNode = new TreeNode('/', "dir")


const input = require('fs').readFileSync('input.txt', 'utf-8').split("\n").map(el => el.split(" "))


function createTree() {
  let currentNode = parentNode
  input.forEach(line => {
    if(line[0] === "$") {
      if(line[1] === "cd") {
        if(line[2] === "/") currentNode = parentNode
        else if(line[2] === "..") currentNode = currentNode.parent
        else currentNode = currentNode.descendants.find(node => node.type === "dir" && node.value === line[2])
      }
    } else if(line[0] === "dir") {
      currentNode.descendants.push(new TreeNode(line[1], "dir", currentNode))
    } else {
      currentNode.descendants.push(new TreeNode(parseInt(line[0]), "file", currentNode))
    }
  })
}


function getSize(node, directoryCallback = () => {}) {
  if (node.type === "file") return node.value

  const dirSize = node.descendants
    .map((child) => getSize(child, directoryCallback))
    .reduce((acc, size) => acc + size, 0)

  directoryCallback(dirSize)

  return dirSize
}


function part1() {
  let sumDir = 0
  getSize(parentNode, (size) => {
    if (size < 100000) 
    sumDir += size
  })
  console.log(sumDir)
}


function part2() {
  const requiredSpace = 30000000 - (70000000 - getSize(parentNode, ()=>{}))
  let bestDir = 0
  getSize(parentNode, (size) => {
    if (bestDir === 0 && size >= requiredSpace) bestDir = size
    else if(size >= requiredSpace && size < bestDir) bestDir = size
  })
  console.log(bestDir)
}


createTree()
part1()
part2()