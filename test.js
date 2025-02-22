const { isDayEven } = require('./index.js');
const assert = require('assert');

function testIsDayEven() {
    
    const originalGetDate = Date.prototype.getDate;

   
    Date.prototype.getDate = function() {
        return 2;  
    };
    assert.strictEqual(isDayEven(), true, 'Должно быть true для чётного числа');

   
    Date.prototype.getDate = function() {
        return 1;  
    };
    assert.strictEqual(isDayEven(), false, 'Должно быть false для нечётного числа');

    Date.prototype.getDate = originalGetDate; 
}

testIsDayEven();
console.log("Тесты прошли успешно!");