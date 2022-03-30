const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let initialValue = 0;
const totalBatteries = batteryBatches.reduce(
    (previouseValue, currentValue) => previouseValue + currentValue
    , initialValue
)

console.log(totalBatteries);
