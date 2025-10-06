# Convert to Chinese Number

Convert-to-Chinese-Number is a tiny utility for transforming ordinary numbers
into traditional Chinese numerals. It supports both everyday numerals (小寫)
and financial numerals (大寫), handles decimals and negative values out of the
box, and can be used from either JavaScript or TypeScript projects.

## Features

- 🔢 Convert integers and decimal numbers into written Chinese numerals.
- 💰 Financial (大寫) output for invoices, cheques, and other official
  documents.
- ➖ Supports negative numbers and preserves decimal precision.
- 🪶 Zero-dependency package that works in Node.js and modern bundlers.

## Installation

Using **npm**:

```bash
npm install @vampireneo/convert-to-chinese-number
```

Using **pnpm**:

```bash
pnpm add @vampireneo/convert-to-chinese-number
```

Using **yarn**:

```bash
yarn add @vampireneo/convert-to-chinese-number
```

## Quick start

```ts
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

Both helpers accept `number` values and return the converted string.

## API reference

### `toChineseNumeral(num: number): string`

Converts the supplied `num` into everyday Chinese numerals (小寫). The returned
string is suitable for common written communication.

### `toChineseFinancialNumeral(num: number): string`

Converts the supplied `num` into Chinese financial numerals (大寫). The returned
string is appropriate for financial documents that require the formal style.

## Limits and caveats

- Numbers larger than `1_000_000_000_000` (one trillion) may not convert
  correctly.
- JavaScript numbers lose precision beyond `Number.MAX_SAFE_INTEGER`, so large
  inputs may not reflect their exact value after conversion.

## Contributing

Bug reports and pull requests are welcome on [GitHub](https://github.com/vampireneo/convert-to-chinese-number).

## License

MIT
