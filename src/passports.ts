import { nodeModuleNameResolver } from "typescript"

export interface Passport {
  byr: string
  iyr: string
  eyr: string
  hgt: string
  hcl: string
  ecl: string
  pid: string
  cid?: string
}

export const isAPassport = (object: any): boolean => {
  return (
    "byr" in object &&
    "iyr" in object &&
    "eyr" in object &&
    "hgt" in object &&
    "hcl" in object &&
    "ecl" in object &&
    "pid" in object
  )
}

export const passportValid = (p: Passport): boolean => {
  return (
    validYear(p.byr, 1920, 2002) &&
    validYear(p.iyr, 2010, 2020) &&
    validYear(p.eyr, 2020, 2030) &&
    validHeight(p.hgt) &&
    validHairColour(p.hcl) &&
    validEyeColour(p.ecl) &&
    validPassportId(p.pid)
  )
}

const validYear = (str: string, min: number, max: number): boolean => {
  const regex = /^\d{4}$/
  return regex.test(str) && Number(str) >= min && Number(str) <= max
}

const validHeight = (str: string): boolean => {
  const regex1 = /^\d{3}cm$/
  const regex2 = /^\d{2}in$/
  if (regex1.test(str)) {
    const num = Number(str.substring(0, str.length - 2))
    return num >= 150 && num <= 193
  } else if (regex2.test(str)) {
    const num = Number(str.substring(0, str.length - 2))
    return num >= 59 && num <= 76
  } else return false
}

const validHairColour = (str: string): boolean => {
  const regex = /^#[0-9, a-f]{6}$/
  return regex.test(str)
}

const validEyeColour = (str: string): boolean => {
  const colours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
  return colours.includes(str)
}

const validPassportId = (str: string): boolean => {
  const regex = /^[0-9]{9}$/
  return regex.test(str)
}
