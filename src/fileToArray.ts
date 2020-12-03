import * as fs from "fs"

export const fileToArray = (filename: string): string[] => {
  const text: string = fs.readFileSync(__dirname + "/" + filename, "utf-8")
  return text.split("\r\n")
}
