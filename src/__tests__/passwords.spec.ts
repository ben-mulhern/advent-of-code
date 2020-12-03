import {
  parseInput,
  PasswordWithPolicy,
  passwordValid1,
  passwordValid2,
} from "../passwords"

describe("parseInput", () => {
  it("Successfully parses an input", () => {
    const input = "13-20 d: xdqcsdqdpkppddbdtdgg"
    const expectedResult = {
      min: 13,
      max: 20,
      letter: "d",
      password: "xdqcsdqdpkppddbdtdgg",
    }
    expect(parseInput(input)).toEqual(expectedResult)
  })
})

describe("passwordValid1", () => {
  it("Returns true when password matches policy", () => {
    expect(
      passwordValid1({ min: 1, max: 3, letter: "a", password: "abc" })
    ).toBeTruthy()
  })

  it("Returns false when password doesn't match policy", () => {
    expect(
      passwordValid1({ min: 1, max: 3, letter: "a", password: "aabcaa" })
    ).toBeFalsy()
  })
})

describe("passwordValid2", () => {
  it("Returns true when password matches policy", () => {
    expect(
      passwordValid2({ min: 1, max: 3, letter: "a", password: "abc" })
    ).toBeTruthy()
  })

  it("Returns false when password doesn't match policy", () => {
    expect(
      passwordValid2({ min: 1, max: 3, letter: "a", password: "aba" })
    ).toBeFalsy()
  })
})
