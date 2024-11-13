import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween';
import { getStarLuminosity } from './getStarLuminosity';

// Function to get the star diameter based on type
export function getStarRadius(type: string, diameter: number): number {
    switch(type) {
        case 'O':
            // O-type stars are massive and can range from 6 to 10 solar radii.
            return parseFloat((diameter * getRandomNumberBetween(6, 10)).toFixed(1));
        case 'B':
            // B-type stars are slightly smaller, around 3 to 6 solar radii.
            return parseFloat((diameter * getRandomNumberBetween(3, 6)).toFixed(1));
        case 'A':
            // A-type stars are around 1.5 to 3 solar radii.
            return parseFloat((diameter * getRandomNumberBetween(1.5, 3)).toFixed(1));
        case 'F':
            // F-type stars are 1.2 to 1.5 solar radii.
            return parseFloat((diameter * getRandomNumberBetween(1.2, 1.5)).toFixed(1));
        case 'G':
            // G-type stars, like the Sun, are 0.96 to 1.1 solar radii.
            return parseFloat((diameter * getRandomNumberBetween(0.96, 1.1)).toFixed(1));
        case 'K':
            // K-type stars are smaller, ranging from 0.7 to 0.96 solar radii.
            return parseFloat((diameter * getRandomNumberBetween(0.7, 0.96)).toFixed(1));
        case 'M':
            if(diameter > 1) {
                return parseFloat((diameter * 25).toFixed(1)); 
            } else {
                return parseFloat((diameter * getRandomNumberBetween(0.1, 1)).toFixed(2));
            }
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
