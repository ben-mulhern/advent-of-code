import { fileToArray } from "./fileToArray"
import {
  passwordValid1,
  passwordValid2,
  parseInput,
  PasswordWithPolicy,
} from "./passwords"

const arr = fileToArray("day2_input.txt")
const passwordsAndPolicies: PasswordWithPolicy[] = arr.map((x) => parseInput(x))

const result1 = passwordsAndPolicies.filter((pp) => passwordValid1(pp)).length
console.log(`Result 1 = ${result1}`)

const result2 = passwordsAndPolicies.filter((pp) => passwordValid2(pp)).length
console.log(`Result 2 = ${result2}`)
