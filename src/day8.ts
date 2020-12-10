import { fileToArray } from "./fileToArray"
import { Instruction, processInstructions } from "./Bootcode"

const arr = fileToArray("day8_input.txt")

const ins: Instruction[] = arr.map((str) => ({
  action: str.substring(0, 3),
  increment: Number(str.substring(4)),
}))

const res = processInstructions(ins)
console.log(res)
