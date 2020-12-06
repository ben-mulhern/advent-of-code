import { parseGroup, PassengerGroup } from "./CustomsForm"
import { fileToArray } from "./fileToArray"

const arr = fileToArray("day6_input.txt", "\r\n\r\n")

const groups: PassengerGroup[] = arr.map((pg) => parseGroup(pg))

const reducer = (acc: number, cur: PassengerGroup) =>
  acc + cur.distinctYesAnswers

const groupCounts: number = groups.reduce(reducer, 0)

console.log(groupCounts)
