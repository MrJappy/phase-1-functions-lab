// Code your solution in this file!
function distanceFromHqInBlocks (someValue){
    const hq = 42;
    return Math.abs(someValue - hq);
}

function distanceFromHqInFeet (someValue) {
    const hqblocks = distanceFromHqInBlocks(someValue);
    return hqblocks * 264;
}

function distanceTravelledInFeet (start, end) {
    const walkedDist = Math.abs(start-end)*264
    return walkedDist
}

function calculatesFarePrice(start, end) {
    const walkedDist = Math.abs(start-end)*264
    if (walkedDist < 400) {
        return 0
    } else if (walkedDist >= 400 && walkedDist < 2000) {
        let float = (walkedDist * 0.02) - 8
        let rounded = parseFloat(float.toFixed(2))
        return rounded;
    } else if (walkedDist >= 2000 && walkedDist <2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}