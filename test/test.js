var assert = require('assert');
var main = require('../main');

describe('toChineseNumeral', function() {
    it('Basic checking', function() {
        assert.equal('零', main.toChineseNumeral(0));
        assert.equal('十', main.toChineseNumeral(10));
        assert.equal('十一', main.toChineseNumeral(11));
        assert.equal('十八', main.toChineseNumeral(18));
        assert.equal('二十一', main.toChineseNumeral(21));
        assert.equal('一百一十', main.toChineseNumeral(110));
        assert.equal('一百二十三', main.toChineseNumeral(123));
        assert.equal('二萬四千六百八十一', main.toChineseNumeral(24681));
    });
    it('Interior zeros checking', function() {
        assert.equal('二十', main.toChineseNumeral(20));
        assert.equal('一百零四', main.toChineseNumeral(104));
        assert.equal('一萬零四', main.toChineseNumeral(10004));
        assert.equal('一萬', main.toChineseNumeral(10000));
    });
    it('Decimal numbers', function() {
        assert.equal('零點一', main.toChineseNumeral(0.1));
        assert.equal('一百二十三點四五', main.toChineseNumeral(123.45));
        assert.equal('負五萬三千六百六十五點六五四五七三', main.toChineseNumeral(-53665.654573));
    });
    it('Whole numbers',function(){
        assert.equal('九', main.toChineseNumeral(9));
        assert.equal('九十九', main.toChineseNumeral(99));
        assert.equal('九百九十九', main.toChineseNumeral(999));
        assert.equal('九千九百九十九', main.toChineseNumeral(9999));
        assert.equal('九萬九千九百九十九', main.toChineseNumeral(99999));
    });
    it('Negative numbers',function(){
        assert.equal('負五', main.toChineseNumeral(-5));
        assert.equal('負五十四', main.toChineseNumeral(-54));
        assert.equal('負五百四十三', main.toChineseNumeral(-543));
        assert.equal('負五千四百三十二', main.toChineseNumeral(-5432));
        assert.equal('負五萬四千三百二十一', main.toChineseNumeral(-54321));
    });
    it('Fractional numbers',function(){
        assert.equal('零點五', main.toChineseNumeral(0.5));
        assert.equal('零點二五', main.toChineseNumeral(0.25));
        assert.equal('零點一二五', main.toChineseNumeral(0.125));
        assert.equal('零點零六二五', main.toChineseNumeral(0.0625));
        assert.equal('零點零三一二五', main.toChineseNumeral(0.03125));
    });
    it('Special Cases',function(){
        assert.equal('十四', main.toChineseNumeral(14));
        assert.equal('十八', main.toChineseNumeral(18));
        assert.equal('二十', main.toChineseNumeral(20));
        assert.equal('二十四', main.toChineseNumeral(24));
        assert.equal('五十', main.toChineseNumeral(50));
        assert.equal('一百', main.toChineseNumeral(100));
        assert.equal('一百一十', main.toChineseNumeral(110));
        assert.equal('一百一十一', main.toChineseNumeral(111));
        assert.equal('負十', main.toChineseNumeral(-10));
        assert.equal('負十四', main.toChineseNumeral(-14));
        assert.equal('負十八', main.toChineseNumeral(-18));
        assert.equal('負二十', main.toChineseNumeral(-20));
        assert.equal('負一百', main.toChineseNumeral(-100));
        assert.equal('負一百一十', main.toChineseNumeral(-110));
        assert.equal('負一百一十一', main.toChineseNumeral(-111));
        assert.equal('一千', main.toChineseNumeral(1000));
        assert.equal('一萬', main.toChineseNumeral(10000));
        assert.equal('一萬零三百零六', main.toChineseNumeral(10306));
        assert.equal('一萬零六', main.toChineseNumeral(10006));
        assert.equal('一萬零六點零零五', main.toChineseNumeral(10006.005));
        assert.equal('負一萬零三百零六點零零五', main.toChineseNumeral(-10306.005));
        assert.equal('負十點零零零零零一', main.toChineseNumeral(-10.000001));
        assert.equal('九萬九千九百九十九點九九九', main.toChineseNumeral(99999.999));
        assert.equal('負九萬九千九百九十九點九九九', main.toChineseNumeral(-99999.999));
    });
    it('Extra cases',function(){
        assert.equal('十萬', main.toChineseNumeral(100000));
        assert.equal('一百萬', main.toChineseNumeral(1000000));
        assert.equal('一千二百三十四萬五千六百七十八', main.toChineseNumeral(12345678));
        assert.equal('一億', main.toChineseNumeral(100000000));
        assert.equal('九千八百七十六億五千四百三十二萬一千零一十二', main.toChineseNumeral(987654321012));
        assert.equal('一兆', main.toChineseNumeral(1000000000000));
        assert.equal('九千九百九十九兆九千九百九十九億九千九百九十九萬九千九百九十', main.toChineseNumeral(9999999999999990));
    });
});