type Test = {
  [key: string | number]: string;
};

const numerals: Test = {
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
};

export const toChineseNumeral = (num: number): string => {
  if (num < 0) {
    return numerals['-'] + toChineseNumeral(-num);
  }

  if (num < 1) {
    return num
      .toString()
      .split('')
      .reduce((p, n) => p + numerals[n], '');
  }

  if (num > Math.floor(num)) {
    return (
      toChineseNumeral(Math.floor(num)) +
      toChineseNumeral(parseFloat(num.toString().replace(/^.*\./, '0.'))).slice(
        1
      )
    );
  }

  return [1000000000000, 100000000, 10000, 1000, 100, 10, 1]
    .reduce(
      (p, n) => {
        if (num >= n) {
          if (p.ling) p.ch += numerals[0];
          const t = Math.floor(num / n);
          p.ch += t < 10 ? numerals[t] : toChineseNumeral(Math.floor(num / n));
          if (n !== 1) p.ch += numerals[n];
          p.ling = false;
        } else if (p.ch) {
          p.ling = true;
        }
        num %= n;
        return p;
      },
      { ch: '', ling: false }
    )
    .ch.replace(/^一十/, '十');
};
