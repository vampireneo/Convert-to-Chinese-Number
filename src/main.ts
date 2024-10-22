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

const toChineseNumeral = (num: number): string => {
  if (num < 0) {
    return numerals['-'] + toChineseNumeral(-num)
  }

  if (num < 1) {
    return num
      .toString()
      .split('')
      .reduce((p, n) => p + numerals[n], '')
  }

  if (num > Math.floor(num)) {
    const [integerPart, decimalPart] = num.toString().split('.')
    return (
      toChineseNumeral(parseInt(integerPart)) +
      toChineseNumeral(parseFloat(`.${decimalPart}`)).slice(1)
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
