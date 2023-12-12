# Convert to Chinese Number

A function that convert numbers to Chinese numerals.

## Installation

Using npm:

```bash
npm i @vampireneo/convert-to-chinese-number
```

## Usage

```js
import {
  toChineseNumeral,
  toChineseFinancialNumeral,
} from '@vampireneo/convert-to-chinese-number'

console.log(toChineseNumeral(100000)) // 十萬
console.log(toChineseNumeral(24681)) // 二萬四千六百八十一
console.log(toChineseNumeral(-53665.65)) // 負五萬三千六百六十五點六五

console.log(toChineseFinancialNumeral(100000)) // 拾萬
console.log(toChineseFinancialNumeral(24681)) // 貳萬肆仟陸佰捌拾壹
console.log(toChineseFinancialNumeral(-53665.65)) // 負伍萬叄仟陸佰陸拾伍點陸伍
```

## API

### toChineseNumeral(num)

Convert a number to ordinary numerals (小寫)

### toChineseFinancialNumeral(num)

Convert a number to financial numerals (大寫)

## Known Issue

Numbers that larger than 1000000000000 may have problem.

## License

MIT
