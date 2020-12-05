import { fileToArray } from "./fileToArray"
import { isAPassport, passportValid, Passport } from "./passports"

const arr = fileToArray("day4_input.txt", "\r\n\r\n")

const passportsArr = arr
  .map((p) => p.split("\r\n"))
  .map((p) => p.flatMap((prop) => prop.split(" ")))
  .map((p) => p.map((prop) => prop.split(":")))

const passports = passportsArr.map((pa) =>
  Object.assign({}, ...Array.from(pa, ([k, v]) => ({ [k]: v })))
)

const passportsWithAllProps = passports.filter((p) => isAPassport(p))

const result1 = passportsWithAllProps.length
console.log(result1)

const result2 = passportsWithAllProps.filter((p) => passportValid(p)).length
console.log(result2)
