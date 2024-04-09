export function generateRandomNumber(min, max, rounded  = true) {
    return rounded ? 
        Math.round(Math.random() * (max - min) + min):
        Math.random() * (max - min) + min;
}
