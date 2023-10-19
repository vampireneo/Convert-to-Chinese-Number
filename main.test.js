import main from './main';

describe('toChineseNumeral', () => {
  test('Basic checking', () => {
    expect(main.toChineseNumeral(0)).toBe('零');
    expect(main.toChineseNumeral(10)).toBe('十');
    expect(main.toChineseNumeral(11)).toBe('十一');
    expect(main.toChineseNumeral(18)).toBe('十八');
    expect(main.toChineseNumeral(21)).toBe('二十一');
    expect(main.toChineseNumeral(110)).toBe('一百一十');
    expect(main.toChineseNumeral(123)).toBe('一百二十三');
    expect(main.toChineseNumeral(24681)).toBe('二萬四千六百八十一');
  });
  test('Interior zeros checking', () => {
    expect(main.toChineseNumeral(20)).toBe('二十');
    expect(main.toChineseNumeral(104)).toBe('一百零四');
    expect(main.toChineseNumeral(10004)).toBe('一萬零四');
    expect(main.toChineseNumeral(10000)).toBe('一萬');
  });
  test('Decimal numbers', () => {
    expect(main.toChineseNumeral(0.1)).toBe('零點一');
    expect(main.toChineseNumeral(123.45)).toBe('一百二十三點四五');
    expect(main.toChineseNumeral(-53665.654573)).toBe(
      '負五萬三千六百六十五點六五四五七三'
    );
  });
  test('Whole numbers', () => {
    expect(main.toChineseNumeral(9)).toBe('九');
    expect(main.toChineseNumeral(99)).toBe('九十九');
    expect(main.toChineseNumeral(999)).toBe('九百九十九');
    expect(main.toChineseNumeral(9999)).toBe('九千九百九十九');
    expect(main.toChineseNumeral(99999)).toBe('九萬九千九百九十九');
  });
  test('Negative numbers', () => {
    expect(main.toChineseNumeral(-5)).toBe('負五');
    expect(main.toChineseNumeral(-54)).toBe('負五十四');
    expect(main.toChineseNumeral(-543)).toBe('負五百四十三');
    expect(main.toChineseNumeral(-5432)).toBe('負五千四百三十二');
    expect(main.toChineseNumeral(-54321)).toBe('負五萬四千三百二十一');
  });
  test('Fractional numbers', () => {
    expect(main.toChineseNumeral(0.5)).toBe('零點五');
    expect(main.toChineseNumeral(0.25)).toBe('零點二五');
    expect(main.toChineseNumeral(0.125)).toBe('零點一二五');
    expect(main.toChineseNumeral(0.0625)).toBe('零點零六二五');
    expect(main.toChineseNumeral(0.03125)).toBe('零點零三一二五');
  });
  test('Special Cases', () => {
    expect(main.toChineseNumeral(14)).toBe('十四');
    expect(main.toChineseNumeral(18)).toBe('十八');
    expect(main.toChineseNumeral(20)).toBe('二十');
    expect(main.toChineseNumeral(24)).toBe('二十四');
    expect(main.toChineseNumeral(50)).toBe('五十');
    expect(main.toChineseNumeral(100)).toBe('一百');
    expect(main.toChineseNumeral(110)).toBe('一百一十');
    expect(main.toChineseNumeral(111)).toBe('一百一十一');
    expect(main.toChineseNumeral(-10)).toBe('負十');
    expect(main.toChineseNumeral(-14)).toBe('負十四');
    expect(main.toChineseNumeral(-18)).toBe('負十八');
    expect(main.toChineseNumeral(-20)).toBe('負二十');
    expect(main.toChineseNumeral(-100)).toBe('負一百');
    expect(main.toChineseNumeral(-110)).toBe('負一百一十');
    expect(main.toChineseNumeral(-111)).toBe('負一百一十一');
    expect(main.toChineseNumeral(1000)).toBe('一千');
    expect(main.toChineseNumeral(10000)).toBe('一萬');
    expect(main.toChineseNumeral(10306)).toBe('一萬零三百零六');
    expect(main.toChineseNumeral(10006)).toBe('一萬零六');
    expect(main.toChineseNumeral(10006.005)).toBe('一萬零六點零零五');
    expect(main.toChineseNumeral(-10306.005)).toBe('負一萬零三百零六點零零五');
    expect(main.toChineseNumeral(-10.000001)).toBe('負十點零零零零零一');
    expect(main.toChineseNumeral(99999.999)).toBe('九萬九千九百九十九點九九九');
    expect(main.toChineseNumeral(-99999.999)).toBe(
      '負九萬九千九百九十九點九九九'
    );
  });
  test('Extra cases', () => {
    expect(main.toChineseNumeral(100000)).toBe('十萬');
    expect(main.toChineseNumeral(1000000)).toBe('一百萬');
    expect(main.toChineseNumeral(12345678)).toBe(
      '一千二百三十四萬五千六百七十八'
    );
    expect(main.toChineseNumeral(100000000)).toBe('一億');
    expect(main.toChineseNumeral(987654321012)).toBe(
      '九千八百七十六億五千四百三十二萬一千零一十二'
    );
    expect(main.toChineseNumeral(1000000000000)).toBe('一兆');
    expect(main.toChineseNumeral(9999999999999990)).toBe(
      '九千九百九十九兆九千九百九十九億九千九百九十九萬九千九百九十'
    );
  });
});
