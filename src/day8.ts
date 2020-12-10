import { fileToArray } from "./fileToArray"
import {
  adjustInstructions,
  Instruction,
  processInstructions,
  Result,
} from "./Bootcode"

const arr = fileToArray("day8_input.txt")

const ins: Instruction[] = arr.map((str) => ({
  action: str.substring(0, 3),
  increment: Number(str.substring(4)),
}))

const res = processInstructions(ins)
console.log(res)

const range: number[] = new Array(ins.length).fill({}).map((elem, i) => i)

const variations = range
  .map((i) => adjustInstructions(ins, i))
  .filter((ins) => ins.length > 0)

const fixedCode = variations.find(
  (ins) => processInstructions(ins)[1] === Result.SUCCESS
)
const result2 = processInstructions(fixedCode)
console.log(result2)
