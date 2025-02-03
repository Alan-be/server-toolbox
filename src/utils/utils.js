function parseFile (content, filename) {
  const lines = content.split('\n')
  const validLines = []

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    const columns = line.split(',')

    if (columns.length !== 4) continue

    const [file, text, numberStr, hex] = columns
    if (file !== filename) continue

    const number = parseFloat(numberStr)
    if (isNaN(number)) continue

    if (!/^[0-9a-fA-F]{32}$/.test(hex)) continue

    validLines.push({ text, number, hex })
  }
  return validLines.length > 0 ? { file: filename, lines: validLines } : null
}

module.exports = { parseFile }
