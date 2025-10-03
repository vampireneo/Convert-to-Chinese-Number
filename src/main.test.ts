import { toChineseFinancialNumeral, toChineseNumeral } from './main'

describe('toChineseNumeral', () => {
  test('Basic checking', () => {
    expect(toChineseNumeral(0)).toBe('零')
    expect(toChineseNumeral(10)).toBe('十')
    expect(toChineseNumeral(11)).toBe('十一')
    expect(toChineseNumeral(18)).toBe('十八')
    expect(toChineseNumeral(21)).toBe('二十一')
    expect(toChineseNumeral(110)).toBe('一百一十')
    expect(toChineseNumeral(123)).toBe('一百二十三')
    expect(toChineseNumeral(24681)).toBe('二萬四千六百八十一')
  })
  test('Interior zeros checking', () => {
    expect(toChineseNumeral(20)).toBe('二十')
    expect(toChineseNumeral(104)).toBe('一百零四')
    expect(toChineseNumeral(10004)).toBe('一萬零四')
    expect(toChineseNumeral(10000)).toBe('一萬')
    expect(toChineseNumeral(205000)).toBe('二十萬五千')
    expect(toChineseNumeral(5920001245)).toBe('五十九億二千萬一千二百四十五')
  })
  test('Decimal numbers', () => {
    expect(toChineseNumeral(0.1)).toBe('零點一')
    expect(toChineseNumeral(123.45)).toBe('一百二十三點四五')
    expect(toChineseNumeral(-53665.654573)).toBe(
      '負五萬三千六百六十五點六五四五七三'
    )
  })
  test('Whole numbers', () => {
    expect(toChineseNumeral(9)).toBe('九')
    expect(toChineseNumeral(99)).toBe('九十九')
    expect(toChineseNumeral(999)).toBe('九百九十九')
    expect(toChineseNumeral(9999)).toBe('九千九百九十九')
    expect(toChineseNumeral(99999)).toBe('九萬九千九百九十九')
  })
  test('Negative numbers', () => {
    expect(toChineseNumeral(-5)).toBe('負五')
    expect(toChineseNumeral(-54)).toBe('負五十四')
    expect(toChineseNumeral(-543)).toBe('負五百四十三')
    expect(toChineseNumeral(-5432)).toBe('負五千四百三十二')
    expect(toChineseNumeral(-54321)).toBe('負五萬四千三百二十一')
  })
  test('Fractional numbers', () => {
    expect(toChineseNumeral(0.5)).toBe('零點五')
    expect(toChineseNumeral(0.25)).toBe('零點二五')
    expect(toChineseNumeral(0.125)).toBe('零點一二五')
    expect(toChineseNumeral(0.0625)).toBe('零點零六二五')
    expect(toChineseNumeral(0.03125)).toBe('零點零三一二五')
  })
  test('Special Cases', () => {
    expect(toChineseNumeral(14)).toBe('十四')
    expect(toChineseNumeral(18)).toBe('十八')
    expect(toChineseNumeral(20)).toBe('二十')
    expect(toChineseNumeral(24)).toBe('二十四')
    expect(toChineseNumeral(50)).toBe('五十')
    expect(toChineseNumeral(100)).toBe('一百')
    expect(toChineseNumeral(110)).toBe('一百一十')
    expect(toChineseNumeral(111)).toBe('一百一十一')
    expect(toChineseNumeral(-10)).toBe('負十')
    expect(toChineseNumeral(-14)).toBe('負十四')
    expect(toChineseNumeral(-18)).toBe('負十八')
    expect(toChineseNumeral(-20)).toBe('負二十')
    expect(toChineseNumeral(-100)).toBe('負一百')
    expect(toChineseNumeral(-110)).toBe('負一百一十')
    expect(toChineseNumeral(-111)).toBe('負一百一十一')
    expect(toChineseNumeral(1000)).toBe('一千')
    expect(toChineseNumeral(10000)).toBe('一萬')
    expect(toChineseNumeral(10306)).toBe('一萬零三百零六')
    expect(toChineseNumeral(10006)).toBe('一萬零六')
    expect(toChineseNumeral(10006.005)).toBe('一萬零六點零零五')
    expect(toChineseNumeral(-10306.005)).toBe('負一萬零三百零六點零零五')
    expect(toChineseNumeral(-10.000001)).toBe('負十點零零零零零一')
    expect(toChineseNumeral(99999.999)).toBe('九萬九千九百九十九點九九九')
    expect(toChineseNumeral(-99999.999)).toBe('負九萬九千九百九十九點九九九')
    expect(toChineseNumeral(Infinity)).toBe('無限')
    expect(() => toChineseNumeral(Number.NaN)).toThrow(TypeError)
  })
  test('Extra cases', () => {
    expect(toChineseNumeral(100000)).toBe('十萬')
    expect(toChineseNumeral(1000000)).toBe('一百萬')
    expect(toChineseNumeral(12345678)).toBe('一千二百三十四萬五千六百七十八')
    expect(toChineseNumeral(100000000)).toBe('一億')
    expect(toChineseNumeral(987654321012)).toBe(
      '九千八百七十六億五千四百三十二萬一千零一十二'
    )
    expect(toChineseNumeral(1000000000000)).toBe('一兆')
    expect(toChineseNumeral(9999999999999990)).toBe(
      '九千九百九十九兆九千九百九十九億九千九百九十九萬九千九百九十'
    )
  })
})

describe('toChineseFinancialNumeral', () => {
  test('Basic checking', () => {
    expect(toChineseFinancialNumeral(0)).toBe('零')
    expect(toChineseFinancialNumeral(10)).toBe('拾')
    expect(toChineseFinancialNumeral(11)).toBe('拾壹')
    expect(toChineseFinancialNumeral(18)).toBe('拾捌')
    expect(toChineseFinancialNumeral(21)).toBe('貳拾壹')
    expect(toChineseFinancialNumeral(110)).toBe('壹佰壹拾')
    expect(toChineseFinancialNumeral(123)).toBe('壹佰貳拾叄')
    expect(toChineseFinancialNumeral(24681)).toBe('貳萬肆仟陸佰捌拾壹')
  })
  test('Interior zeros checking', () => {
    expect(toChineseFinancialNumeral(20)).toBe('貳拾')
    expect(toChineseFinancialNumeral(104)).toBe('壹佰零肆')
    expect(toChineseFinancialNumeral(10004)).toBe('壹萬零肆')
    expect(toChineseFinancialNumeral(10000)).toBe('壹萬')
    expect(toChineseFinancialNumeral(205000)).toBe('貳拾萬伍仟')
    expect(toChineseFinancialNumeral(5920001245)).toBe(
      '伍拾玖億貳仟萬壹仟貳佰肆拾伍'
    )
  })
  test('Decimal numbers', () => {
    expect(toChineseFinancialNumeral(0.1)).toBe('零點壹')
    expect(toChineseFinancialNumeral(123.45)).toBe('壹佰貳拾叄點肆伍')
    expect(toChineseFinancialNumeral(-53665.654573)).toBe(
      '負伍萬叄仟陸佰陸拾伍點陸伍肆伍柒叄'
    )
  })
  test('Whole numbers', () => {
    expect(toChineseFinancialNumeral(9)).toBe('玖')
    expect(toChineseFinancialNumeral(99)).toBe('玖拾玖')
    expect(toChineseFinancialNumeral(999)).toBe('玖佰玖拾玖')
    expect(toChineseFinancialNumeral(9999)).toBe('玖仟玖佰玖拾玖')
    expect(toChineseFinancialNumeral(99999)).toBe('玖萬玖仟玖佰玖拾玖')
  })
  test('Negative numbers', () => {
    expect(toChineseFinancialNumeral(-5)).toBe('負伍')
    expect(toChineseFinancialNumeral(-54)).toBe('負伍拾肆')
    expect(toChineseFinancialNumeral(-543)).toBe('負伍佰肆拾叄')
    expect(toChineseFinancialNumeral(-5432)).toBe('負伍仟肆佰叄拾貳')
    expect(toChineseFinancialNumeral(-54321)).toBe('負伍萬肆仟叄佰貳拾壹')
  })
  test('Fractional numbers', () => {
    expect(toChineseFinancialNumeral(0.5)).toBe('零點伍')
    expect(toChineseFinancialNumeral(0.25)).toBe('零點貳伍')
    expect(toChineseFinancialNumeral(0.125)).toBe('零點壹貳伍')
    expect(toChineseFinancialNumeral(0.0625)).toBe('零點零陸貳伍')
    expect(toChineseFinancialNumeral(0.03125)).toBe('零點零叄壹貳伍')
  })
  test('Special Cases', () => {
    expect(toChineseFinancialNumeral(14)).toBe('拾肆')
    expect(toChineseFinancialNumeral(18)).toBe('拾捌')
    expect(toChineseFinancialNumeral(20)).toBe('貳拾')
    expect(toChineseFinancialNumeral(24)).toBe('貳拾肆')
    expect(toChineseFinancialNumeral(50)).toBe('伍拾')
    expect(toChineseFinancialNumeral(100)).toBe('壹佰')
    expect(toChineseFinancialNumeral(110)).toBe('壹佰壹拾')
    expect(toChineseFinancialNumeral(111)).toBe('壹佰壹拾壹')
    expect(toChineseFinancialNumeral(-10)).toBe('負拾')
    expect(toChineseFinancialNumeral(-14)).toBe('負拾肆')
    expect(toChineseFinancialNumeral(-18)).toBe('負拾捌')
    expect(toChineseFinancialNumeral(-20)).toBe('負貳拾')
    expect(toChineseFinancialNumeral(-100)).toBe('負壹佰')
    expect(toChineseFinancialNumeral(-110)).toBe('負壹佰壹拾')
    expect(toChineseFinancialNumeral(-111)).toBe('負壹佰壹拾壹')
    expect(toChineseFinancialNumeral(1000)).toBe('壹仟')
    expect(toChineseFinancialNumeral(10000)).toBe('壹萬')
    expect(toChineseFinancialNumeral(10306)).toBe('壹萬零叄佰零陸')
    expect(toChineseFinancialNumeral(10006)).toBe('壹萬零陸')
    expect(toChineseFinancialNumeral(10006.005)).toBe('壹萬零陸點零零伍')
    expect(toChineseFinancialNumeral(-10306.005)).toBe(
      '負壹萬零叄佰零陸點零零伍'
    )
    expect(toChineseFinancialNumeral(-10.000001)).toBe('負拾點零零零零零壹')
    expect(toChineseFinancialNumeral(99999.999)).toBe(
      '玖萬玖仟玖佰玖拾玖點玖玖玖'
    )
    expect(toChineseFinancialNumeral(-99999.999)).toBe(
      '負玖萬玖仟玖佰玖拾玖點玖玖玖'
    )
  })
  test('Extra cases', () => {
    expect(toChineseFinancialNumeral(100000)).toBe('拾萬')
    expect(toChineseFinancialNumeral(1000000)).toBe('壹佰萬')
    expect(toChineseFinancialNumeral(12345678)).toBe(
      '壹仟貳佰叄拾肆萬伍仟陸佰柒拾捌'
    )
    expect(toChineseFinancialNumeral(100000000)).toBe('壹億')
    expect(toChineseFinancialNumeral(987654321012)).toBe(
      '玖仟捌佰柒拾陸億伍仟肆佰叄拾貳萬壹仟零壹拾貳'
    )
    expect(toChineseFinancialNumeral(1000000000000)).toBe('壹兆')
    expect(toChineseFinancialNumeral(9999999999999990)).toBe(
      '玖仟玖佰玖拾玖兆玖仟玖佰玖拾玖億玖仟玖佰玖拾玖萬玖仟玖佰玖拾'
    )
  })
})
