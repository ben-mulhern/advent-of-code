import { Set } from "immutable"

export interface PassengerGroup {
  distinctYesAnswers: number
}

export const parseGroup = (str: string): PassengerGroup => {
  const persons: string[] = str.split("\r\n")
  const allYesAnswers: string[] = persons.flatMap((p) => p.split(""))
  const distinctYesAnswers = Set(allYesAnswers).size
  return { distinctYesAnswers }
}
