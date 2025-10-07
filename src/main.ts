type ChineseNumeralMap = {
  [key: string | number]: string
}

const numerals: ChineseNumeralMap = {
  '-': '負',
  '.': '點',
  0: '零',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '七',
  8: '八',
  9: '九',
  10: '十',
  100: '百',
  1000: '千',
  10000: '萬',
  100000000: '億',
  1000000000000: '兆',
}

const financialNumerals: ChineseNumeralMap = {
  一: '壹',
  二: '貳',
  三: '叄',
  四: '肆',
  五: '伍',
  六: '陸',
  七: '柒',
  八: '捌',
  九: '玖',
  十: '拾',
  百: '佰',
  千: '仟',
}

const expandScientificNotation = (value: number): string => {
  const numStr = Math.abs(value).toString()

  if (!/[eE]/.test(numStr)) {
    return numStr
  }

  const [mantissa, exponentPart] = numStr.split(/[eE]/)
  const exponent = Number(exponentPart)
  const digits = mantissa.replace('.', '')
  const decimalDigits = mantissa.includes('.')
    ? mantissa.length - mantissa.indexOf('.') - 1
    : 0
  const pointIndex = digits.length + exponent - decimalDigits

  if (pointIndex <= 0) {
    return `0.${'0'.repeat(-pointIndex)}${digits}`
  }

  if (pointIndex >= digits.length) {
    return `${digits}${'0'.repeat(pointIndex - digits.length)}`
  }

  return `${digits.slice(0, pointIndex)}.${digits.slice(pointIndex)}`
}

const toChineseNumeral = (num: number): string => {
  if (Number.isNaN(num)) {
    throw new TypeError('Input must be a finite number')
  }

  if (!Number.isFinite(num)) {
    return '無限'
  }

  if (num < 0) {
    return numerals['-'] + toChineseNumeral(-num)
  }

  if (num < 1) {
    const normalized = expandScientificNotation(num)

    return normalized
      .split('')
      .reduce((p, n) => p + numerals[n], '')
  }

  if (num > Math.floor(num)) {
    const [integerPart, decimalPart = ''] = expandScientificNotation(num).split('.')
    return (
      toChineseNumeral(parseInt(integerPart)) +
      (decimalPart
        ? toChineseNumeral(parseFloat(`.${decimalPart}`)).slice(1)
        : '')
    )
  }

  return [1000000000000, 100000000, 10000, 1000, 100, 10, 1]
    .reduce(
      (p, n) => {
        if (num >= n) {
          if (p.zeroFlag) p.ch += numerals[0]
          const t = Math.floor(num / n)
          p.ch += t < 10 ? numerals[t] : toChineseNumeral(Math.floor(num / n))
          if (n !== 1) p.ch += numerals[n]
          p.zeroFlag = false
        } else if (p.ch) {
          p.zeroFlag = true
        }
        num %= n
        return p
      },
      { ch: '', zeroFlag: false }
    )
    .ch.replace(/^一十/, '十')
}

const toChineseFinancialNumeral = (num: number): string =>
  Object.keys(financialNumerals).reduce(
    (p, c) => p.replace(new RegExp(c, 'g'), financialNumerals[c]),
    toChineseNumeral(num)
  )

export { toChineseNumeral, toChineseFinancialNumeral }
