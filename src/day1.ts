import * as fs from "fs"

const text: string = fs.readFileSync(__dirname + "/day1_numbers.txt", "utf-8")
const ints: number[] = text.split("\n").map((t) => Number(t))

const target: number = 2020

// Flatmap ints into a map of ints - result needs to be a, b pairs
// Then find the pair that sums and return that
const pairs = ints.flatMap((i) => ints.map((j) => [i, j]))
console.log(pairs)
const pair = pairs.find((p) => p[0] + p[1] === target && p[0] !== p[1])
console.log(`Pair = ${pair}`)
const result = pair[0] * pair[1]
console.log(`Result = ${result}`)
