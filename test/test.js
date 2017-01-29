var assert = require('assert');
var main = require('../main');

describe('toChineseNumeral', function() {
    it('0 === 零', function() {
        assert.equal('零', main.toChineseNumeral(0));
    });
    it('10 === 十', function() {
        assert.equal('十', main.toChineseNumeral(10));
    });
    it('11 === 十一', function() {
        assert.equal('十一', main.toChineseNumeral(11));
    });
    it('18 === 十八', function() {
        assert.equal('十八', main.toChineseNumeral(18));
    });
    it('21 === 二十一', function() {
        assert.equal('二十一', main.toChineseNumeral(21));
    });
    it('110 === 一百一十', function() {
        assert.equal('一百一十', main.toChineseNumeral(110));
    });
    it('123 === 一百二十三', function() {
        assert.equal('一百二十三', main.toChineseNumeral(123));
    });
    it('24681 === 二萬四千六百八十一', function() {
        assert.equal('二萬四千六百八十一', main.toChineseNumeral(24681));
    });
    it('20 === 二十', function() {
        assert.equal('二十', main.toChineseNumeral(20));
    });
    it('104 === 一百零四', function() {
        assert.equal('一百零四', main.toChineseNumeral(104));
    });
    it('10004 === 一萬零四', function() {
        assert.equal('一萬零四', main.toChineseNumeral(10004));
    });
    it('10000 === 一萬', function() {
        assert.equal('一萬', main.toChineseNumeral(10000));
    });
    it('0.1 === 零點一', function() {
        assert.equal('零點一', main.toChineseNumeral(0.1));
    });
    it('123.45 === 一百二十三點四五', function() {
        assert.equal('一百二十三點四五', main.toChineseNumeral(123.45));
    });
    it('-53665.654573 === 負五萬三千六百六十五點六五四五七三', function() {
        assert.equal('負五萬三千六百六十五點六五四五七三', main.toChineseNumeral(-53665.654573));
    });
});