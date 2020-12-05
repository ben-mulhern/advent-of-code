export interface Seat {
  row: number
  seat: number
  id: number
}

export const parseSeatCode = (str: string): Seat => {
  const rowStr =
    "0b" + str.substring(0, 7).replace(/F/g, "0").replace(/B/g, "1")
  const seatStr =
    "0b" + str.substring(7, 10).replace(/L/g, "0").replace(/R/g, "1")
  const row = Number(rowStr)
  const seat = Number(seatStr)
  const id = row * 8 + seat
  return { row, seat, id }
}
