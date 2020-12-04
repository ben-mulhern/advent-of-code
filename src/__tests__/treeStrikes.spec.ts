import { treeStrikes, getCoordinate } from "../treeStrikes"

describe("getCoordinate", () => {
  it("Gets the right coordinate on 1st row", () => {
    const row = "..##......."
    const c = getCoordinate(0, 3, row.length)
    expect(c).toEqual(3)
  })
  it("Gets the right coordinate on 2nd row", () => {
    const row = "#...#...#.."
    const c = getCoordinate(1, 3, row.length)
    expect(c).toEqual(6)
  })
  it("Gets the right coordinate on 4th row", () => {
    const row = "..#.#...#.#"
    const c = getCoordinate(3, 3, row.length)
    expect(c).toEqual(1)
  })
})

describe("treeStrikes", () => {
  it("Successfully navigates the map", () => {
    const map = ["..##.......", "#...#...#..", ".#....#..#.", "..#.#...#.#"]
    // 01234567890
    // ..##.......  (Pos = 3, HIT)
    // #...#...#..  (Pos = 6, MISS)
    // .#....#..#.  (Pos = 9, HIT)
    // ..#.#...#.#  (Pos = 1, MISS)
    expect(treeStrikes(3, 1, map)).toEqual(2)
  })
})
