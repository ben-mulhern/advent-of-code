import { Instruction, processInstructions } from "../Bootcode"

describe("processInstructions", () => {
  it("Calculates the accumulator at the point of looping correctly", () => {
    const ins: Instruction[] = [
      { action: "nop", increment: +0 },
      { action: "acc", increment: +1 },
      { action: "jmp", increment: +4 },
      { action: "acc", increment: +3 },
      { action: "jmp", increment: -3 },
      { action: "acc", increment: -99 },
      { action: "acc", increment: +1 },
      { action: "jmp", increment: -4 },
      { action: "acc", increment: +6 },
    ]

    expect(processInstructions(ins)).toEqual(5)
  })
})
