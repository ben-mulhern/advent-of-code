export interface PasswordWithPolicy {
  min: number
  max: number
  letter: string
  password: string
}

export const passwordValid1 = (pp: PasswordWithPolicy): boolean => {
  const letters = pp.password.split("")
  const occurs: number = letters.filter((x) => x === pp.letter).length
  return occurs >= pp.min && occurs <= pp.max
}

export const passwordValid2 = (pp: PasswordWithPolicy): boolean => {
  const letters = pp.password.split("")
  const occurs: number = letters.filter((x) => x === pp.letter).length
  const l1 = pp.password.charAt(pp.min - 1)
  const l2 = pp.password.charAt(pp.max - 1)
  return (
    (l1 === pp.letter && l2 !== pp.letter) ||
    (l1 !== pp.letter && l2 === pp.letter)
  )
}

export const parseInput = (input: string): PasswordWithPolicy => {
  const hyphenPos = input.indexOf("-")
  const colonPos = input.indexOf(":")

  const min = Number(input.slice(0, hyphenPos))
  const max = Number(input.slice(hyphenPos + 1, colonPos - 1))
  const letter = input.slice(colonPos - 1, colonPos)
  const password = input.slice(colonPos + 1).trim()

  const response = {
    min,
    max,
    letter,
    password,
  }

  return response
}
