export interface Instruction {
  action: string
  increment: number
}

export enum Result {
  SUCCESS,
  OVERFLOW,
  INFINITE_LOOP,
}

export const processInstructions = (
  instructions: Instruction[],
  acc: number = 0,
  currentIndex: number = 0,
  alreadyExecuted: number[] = []
): [number, Result] => {
  if (alreadyExecuted.includes(currentIndex)) return [acc, Result.INFINITE_LOOP]

  if (currentIndex > instructions.length || currentIndex < 0)
    return [acc, Result.OVERFLOW]

  if (currentIndex === instructions.length) return [acc, Result.SUCCESS]

  switch (instructions[currentIndex].action) {
    case "nop":
      return processInstructions(
        instructions,
        acc,
        currentIndex + 1,
        alreadyExecuted.concat(currentIndex)
      )

    case "acc":
      return processInstructions(
        instructions,
        acc + instructions[currentIndex].increment,
        currentIndex + 1,
        alreadyExecuted.concat(currentIndex)
      )

    case "jmp":
      return processInstructions(
        instructions,
        acc,
        currentIndex + instructions[currentIndex].increment,
        alreadyExecuted.concat(currentIndex)
      )
  }
}

const swapInstruction = (i: Instruction): Instruction => {
  const newAction = i.action === "nop" ? "jmp" : "nop"
  return { action: newAction, increment: i.increment }
}

export const adjustInstructions = (
  instructions: Instruction[],
  index: number
): Instruction[] => {
  if (index < 0 || index >= instructions.length) return []
  switch (instructions[index].action) {
    case "acc":
      return []
    default:
      return instructions.map((ins, j) =>
        j === index ? swapInstruction(ins) : ins
      )
  }
}
