// src/utils/getRandomSmallerNumberBetween.ts

export function getRandomSmallerNumberBetween(min: number, max: number): number {
    const range = max - min;
    const normalizedRandom = Math.random();
    const skewedRandom = Math.pow(normalizedRandom, 30); // Cube the random value to skew distribution
    return min + skewedRandom * range;
}
