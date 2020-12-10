import {
  Instruction,
  processInstructions,
  Result,
  adjustInstructions,
} from "../Bootcode"

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

    expect(processInstructions(ins)).toEqual([5, Result.INFINITE_LOOP])
  })

  it("Calculates a successful termination correctly", () => {
    const ins: Instruction[] = [
      { action: "nop", increment: +0 },
      { action: "acc", increment: +1 },
      { action: "jmp", increment: +4 },
      { action: "acc", increment: +3 },
      { action: "jmp", increment: -3 },
      { action: "acc", increment: -99 },
      { action: "acc", increment: +1 },
      { action: "nop", increment: -4 },
      { action: "acc", increment: +6 },
    ]

    expect(processInstructions(ins)).toEqual([8, Result.SUCCESS])
  })
})

describe("adjustInstructions", () => {
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
  it("Changes a jmp to a nop", () => {
    expect(adjustInstructions(ins, 7)).toEqual([
      { action: "nop", increment: +0 },
      { action: "acc", increment: +1 },
      { action: "jmp", increment: +4 },
      { action: "acc", increment: +3 },
      { action: "jmp", increment: -3 },
      { action: "acc", increment: -99 },
      { action: "acc", increment: +1 },
      { action: "nop", increment: -4 },
      { action: "acc", increment: +6 },
    ])
  })
  it("Changes a nop to a jmp", () => {
    expect(adjustInstructions(ins, 0)).toEqual([
      { action: "jmp", increment: +0 },
      { action: "acc", increment: +1 },
      { action: "jmp", increment: +4 },
      { action: "acc", increment: +3 },
      { action: "jmp", increment: -3 },
      { action: "acc", increment: -99 },
      { action: "acc", increment: +1 },
      { action: "jmp", increment: -4 },
      { action: "acc", increment: +6 },
    ])
  })
  it("Changes an acc to an empty array nop", () => {
    expect(adjustInstructions(ins, 1)).toEqual([])
  })
})
