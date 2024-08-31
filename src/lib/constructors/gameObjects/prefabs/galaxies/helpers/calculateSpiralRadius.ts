export function calculateSpiralRadius(baseRadius: number, starIndex: number, totalStars: number, numArms: number, spiralFactor: number): number {
    const spiralAngle = (starIndex / totalStars) * 2 * Math.PI * numArms;
    return baseRadius * (1 + spiralFactor * Math.sin(spiralAngle));
}