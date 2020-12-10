export interface Instruction {
  action: string
  increment: number
}

export const processInstructions = (
  instructions: Instruction[],
  acc: number = 0,
  currentIndex: number = 0,
  alreadyExecuted: number[] = []
): number => {
  if (alreadyExecuted.includes(currentIndex)) return acc

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
