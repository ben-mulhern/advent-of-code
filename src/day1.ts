import * as fs from "fs"

const text: string = fs.readFileSync(__dirname + "/day1_numbers.txt", "utf-8")
const ints: number[] = text.split("\n").map((t) => Number(t))
const target: number = 2020
const pairs = ints.flatMap((i) => ints.map((j) => [i, j]))
const pair = pairs.find((p) => p[0] + p[1] === target && p[0] !== p[1])
console.log(`Pair = ${pair}`)
const result: number = pair[0] * pair[1]
console.log(`Part 1 result = ${result}`)

const triplets = pairs.flatMap((p) => ints.map((q) => p.concat(q)))
const triplet = triplets.find(
  (t) => t[0] + t[1] + t[2] === target && t[0] !== t[1] && t[1] !== t[2]
)
console.log(`Triplet = ${triplet}`)
const result2: number = triplet[0] * triplet[1] * triplet[2]
console.log(`Part 2 result = ${result2}`)
