export const treeStrikes = (
  rightMovement: number,
  downMovement: number,
  map: string[]
): number => {
  // First get rid of any rows we won't encounter at all - always discard 1st row
  const rowHits: string[] = map.filter(
    (r, i) => i % downMovement === 0 && i > 0
  )
  // Now let's figure out what we hit on each row
  const width = rowHits[0].length
  const coordinates: string[] = rowHits.map((r, i) =>
    r.charAt(getCoordinate(i, rightMovement, width))
  )

  return coordinates.filter((c) => c === "#").length
}

export const getCoordinate = (
  rowNum: number,
  rightMovement: number,
  width: number
): number => ((rowNum + 1) * rightMovement) % width
