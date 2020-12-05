import * as fs from "fs"

export const fileToArray = (
  filename: string,
  splitter: string = "\r\n"
): string[] => {
  const text: string = fs.readFileSync(__dirname + "/" + filename, "utf-8")
  return text.split(splitter)
}
