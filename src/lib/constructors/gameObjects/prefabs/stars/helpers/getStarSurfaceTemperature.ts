import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

// Function to get the star diameter based on type
export function getStarSurfaceTemperature(type: string, diameter: number): number {

    switch(type) {
        case 'O':
            return Math.round(getRandomNumberBetween(30000, 50000)); 
        case 'B':
            return Math.round(getRandomNumberBetween(10000, 30000)); 
        case 'A':
            return Math.round(getRandomNumberBetween(7500, 10000)); 
        case 'F':
            return Math.round(getRandomNumberBetween(6000, 7500)); 
        case 'G':
            return Math.round(getRandomNumberBetween(5900, 6200)); 
        case 'K':
            return Math.round(getRandomNumberBetween(3700, 7200));
        case 'M':
            if(diameter > 1) {
                return Math.round(getRandomNumberBetween(2400, 3700)); 
            } else {
                return Math.round(getRandomNumberBetween(2400, 3000)); 
            }
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
