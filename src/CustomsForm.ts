import { Set, List } from "immutable"

export interface PassengerGroup {
  distinctYesAnswers: number,
  universalYesAnswers: number
}

export const parseGroup = (str: string): PassengerGroup => {
  const persons: string[] = str.split("\r\n")
  const allYesAnswers: string[] = persons.flatMap((p) => p.split(""))
  const distinctYesAnswers = Set(allYesAnswers).size

  const groupedAnswers = List(allYesAnswers).groupBy(a => a)
  const universalYesAnswers = groupedAnswers.filter(ga => ga.valueSeq().size === persons.length).size

  return { distinctYesAnswers, universalYesAnswers }
}
