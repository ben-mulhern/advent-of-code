import { PassengerGroup, parseGroup } from "../CustomsForm"

describe("parseGroup", () => {
  it("Parses a group correctly", () => {
    const g = "ab\r\nac"
    expect(parseGroup(g)).toEqual({
      distinctYesAnswers: 3,
      universalYesAnswers: 1
    })
  })

  it("Parses a bigger group correctly", () => {
    const g = "bapocnysdr\r\nlpandcmb\r\nbplndca"
    expect(parseGroup(g)).toEqual({
      distinctYesAnswers: 12,
      universalYesAnswers: 6
    })
  })
})
