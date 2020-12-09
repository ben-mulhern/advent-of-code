import { fileToArray } from "./fileToArray"
import { BagRule, BagType, findParentBags, countChildBags } from "./Bag"
import { count } from "console"

const arr = fileToArray("day7_input.txt")

const rules: BagRule[] = arr.map((str) => BagRule.of(str))

const bt: BagType = BagType.fromString("shiny gold")

const res = findParentBags(bt, rules)
console.log(res.length)

const res2 = countChildBags(bt, rules)
console.log(res2)
