import { fileToArray } from "./fileToArray"
import { treeStrikes } from "./treeStrikes"

const arr = fileToArray("day3_input.txt")
const result1 = treeStrikes(3, 1, arr)
console.log(result1)

const slopes = [
  { r: 1, d: 1 },
  { r: 3, d: 1 },
  { r: 5, d: 1 },
  { r: 7, d: 1 },
  { r: 1, d: 2 },
]

const result2 = slopes
  .map((p) => treeStrikes(p.r, p.d, arr))
  .reduce((acc = 1, cur) => acc * cur)
console.log(result2)
