import partition from "lodash.partition"

export class BagType {
  private constructor(readonly adjective: string, readonly colour: string) {}

  static fromString(str: string): BagType {
    const arr = str.split(" ")
    return new BagType(arr[0], arr[1])
  }

  static fromArray(arr: string[]): BagType {
    return new BagType(arr[0], arr[1])
  }

  equals(that: BagType): boolean {
    return this.adjective === that.adjective && this.colour === that.colour
  }
}

export class BagAmount {
  private constructor(readonly num: number, readonly bagType: BagType) {}

  static of(str: string): BagAmount {
    const arr = str.split(" ")
    const num = Number(arr[0])
    const bagType = BagType.fromArray(arr.slice(1, 3))
    return new BagAmount(num, bagType)
  }
}

export class BagRule {
  private constructor(
    readonly bagType: BagType,
    readonly within: BagAmount[]
  ) {}

  static of(str: string): BagRule {
    const arr1 = str.split(" bags contain ")
    const bt = BagType.fromString(arr1[0])
    const str2 = arr1[1].replace(/ bags| bag/g, "").replace(".", "")
    const within: BagAmount[] = str2.split(", ").map((s) => BagAmount.of(s))
    const noBags: boolean = str2.includes("no other")
    return new BagRule(bt, noBags ? [] : within)
  }

  contains(bt: BagType): boolean {
    return this.within.some((ba) => ba.bagType.equals(bt))
  }

  containsAny(bts: BagType[]): boolean {
    return bts.some((bt) => this.within.some((ba) => ba.bagType.equals(bt)))
  }
}

export const findParentBags = (
  init: BagType,
  rem: BagRule[],
  acc: BagRule[] = []
): BagRule[] => {
  const f = (r: BagRule) =>
    r.contains(init) || r.containsAny(acc.map((br) => br.bagType))

  const [hits, misses] = partition(rem, f)

  return hits.length === 0
    ? acc
    : findParentBags(init, misses, acc.concat(hits))
}

const getRule = (bt: BagType, brs: BagRule[]): BagRule =>
  brs.find((br) => br.bagType.equals(bt))

export const countChildBags = (bt: BagType, rules: BagRule[]): number => {
  const rule = getRule(bt, rules)

  if (rule.within.length === 0) return 0

  const counts = rule.within.map(
    (ba) => ba.num * (1 + countChildBags(ba.bagType, rules))
  )
  const res = counts.reduce((x, y) => x + y)
  return res
}
