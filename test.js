
const { isDayEven } = require('./index.js');
const assert = require('assert');

function testIsDayEven() {
   
    const originalDate = Date;
    global.Date = class extends Date {
        constructor() {
            super('2025-10-02'); 
        }
    };

    assert.strictEqual(isDayEven(), true, 'Должно быть true для чётного числа');

    global.Date = class extends Date {
        constructor() {
            super('2025-10-01'); 
        }
    };

    assert.strictEqual(isDayEven(), false, 'Должно быть false для нечётного числа');

    global.Date = originalDate; 
}

testIsDayEven();
console.log(" тесты прошли успешно!");
