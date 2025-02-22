
function isDayEven() {
    const day = new Date().getDate();
    return day % 2 === 0;
}

function checkDay() {
    if (isDayEven()) {
        console.log("Сегодня чётное число.");
    } else {
        console.log("Сегодня нечётное число.");
    }
}

module.exports = { isDayEven, checkDay };

if (require.main === module) {
    checkDay();
}
