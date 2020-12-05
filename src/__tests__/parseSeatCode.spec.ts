import { Seat, parseSeatCode } from "../parseSeatCode"

describe("parseSeatCode", () => {
  it("Parses a seat code correctly", () => {
    expect(parseSeatCode("BFFFBBFRRR")).toEqual({
      row: 70,
      seat: 7,
      id: 567,
    })
    expect(parseSeatCode("FFFBBBFRRR")).toEqual({
      row: 14,
      seat: 7,
      id: 119,
    })
    expect(parseSeatCode("BBFFBBFRLL")).toEqual({
      row: 102,
      seat: 4,
      id: 820,
    })
  })
})
