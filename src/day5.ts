import { fileToArray } from "./fileToArray"
import { Seat, parseSeatCode } from "./parseSeatCode"

const seatCodes = fileToArray("day5_input.txt")

const seats: Seat[] = seatCodes.map((sc) => parseSeatCode(sc))
const sortedSeats: Seat[] = seats.sort((a, b) => a.id - b.id)

const result1: number = sortedSeats[sortedSeats.length - 1].id
console.log(result1)

const offset = sortedSeats[0].id
const mySeat = sortedSeats.find((s, i) => s.id - offset !== i)
console.log(mySeat.id - 1)
