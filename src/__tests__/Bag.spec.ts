import { BagRule, BagType, countChildBags } from "../Bag"

describe("BagRule", () => {
  const str =
    "mirrored indigo bags contain 4 pale tan bags, 1 posh indigo bag, 3 shiny salmon bags, 4 wavy indigo bags."
  const br = BagRule.of(str)

  it("Parses a string correctly", () => {
    expect(br.bagType.adjective).toEqual("mirrored")
    expect(br.bagType.colour).toEqual("indigo")
    expect(br.within[0].bagType.adjective).toEqual("pale")
    expect(br.within[3].num).toEqual(4)
  })

  it("Reports the bags it contains correctly", () => {
    expect(br.contains(BagType.fromString("posh indigo"))).toBeTruthy()
    expect(br.contains(BagType.fromString("blorp blurple"))).toBeFalsy()
  })

  it("Handles final entries correctly", () => {
    const brf = BagRule.of("faded teal bags contain no other bags.")
    expect(brf.within.length).toEqual(0)
  })
})

describe("countChildBags", () => {
  it("Counts a very simple case correctly", () => {
    const arr: string[] = [
      "dark blue bags contain 2 dark violet bags.",
      "dark violet bags contain no other bags.",
    ]
    const rules: BagRule[] = arr.map((s) => BagRule.of(s))
    const bt: BagType = BagType.fromString("dark blue")
    const res: number = countChildBags(bt, rules)
    expect(res).toEqual(2)
  })

  it("Counts child bags correctly", () => {
    const arr: string[] = [
      "shiny gold bags contain 2 dark red bags.",
      "dark red bags contain 2 dark orange bags.",
      "dark orange bags contain 2 dark yellow bags.",
      "dark yellow bags contain 2 dark green bags.",
      "dark green bags contain 2 dark blue bags.",
      "dark blue bags contain 2 dark violet bags.",
      "dark violet bags contain no other bags.",
    ]
    const rules: BagRule[] = arr.map((s) => BagRule.of(s))
    const bt: BagType = BagType.fromString("shiny gold")
    const res: number = countChildBags(bt, rules)
    expect(res).toEqual(126)
  })
})
