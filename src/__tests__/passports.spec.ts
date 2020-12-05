import { isAPassport, passportValid } from "../passports"

describe("isAPassport", () => {
  it("Validates a passport if it has all the properties", () => {
    const passport = {
      ecl: "gry",
      pid: "860033327",
      eyr: "2020",
      hcl: "fffffd",
      byr: "1937",
      iyr: "2017",
      cid: "147",
      hgt: "183cm",
    }
    expect(isAPassport(passport)).toBeTruthy()
  })

  it("Invalidates a passport if it doesn't have all the properties", () => {
    const passport = {
      ecl: "gry",
      pid: "860033327",
      eyr: "2020",
      hcl: "fffffd",
      byr: "1937",
      cid: "147",
      hgt: "183cm",
    }
    expect(isAPassport(passport)).toBeFalsy()
  })
})

describe("passportValid", () => {
  it("Validates a passport if all props are correct", () => {
    const passport = {
      ecl: "grn",
      pid: "087499704",
      eyr: "2030",
      hcl: "#623a2f",
      byr: "1980",
      iyr: "2012",
      cid: "147",
      hgt: "74in",
    }
    expect(passportValid(passport)).toBeTruthy()
  })
  it("Invalidates a passport if any props are incorrect", () => {
    const passport = {
      ecl: "grn",
      pid: "186cm",
      eyr: "1972",
      hcl: "#18171d",
      byr: "1926",
      iyr: "2018",
      cid: "100",
      hgt: "170",
    }
    expect(passportValid(passport)).toBeFalsy()
  })
})
