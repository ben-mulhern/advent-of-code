import { parseGroup, PassengerGroup } from "./CustomsForm"
import { fileToArray } from "./fileToArray"

const arr = fileToArray("day6_input.txt", "\r\n\r\n")

const groups: PassengerGroup[] = arr.map((pg) => parseGroup(pg))

const reducer1 = (acc: number, cur: PassengerGroup) =>
  acc + cur.distinctYesAnswers

  const reducer2 = (acc: number, cur: PassengerGroup) =>
  acc + cur.universalYesAnswers

const groupCounts1: number = groups.reduce(reducer1, 0)
console.log(groupCounts1)

const groupCounts2: number = groups.reduce(reducer2, 0)
console.log(groupCounts2)