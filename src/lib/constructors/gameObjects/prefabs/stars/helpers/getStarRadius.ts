import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween';
import { getStarLuminosity } from './getStarLuminosity';

// Function to get the star diameter based on type
export function getStarRadius(type: string, diameter: number): number {
    switch(type) {
        case 'O':
            // O-type stars are massive and can range from 6 to 10 solar radii.
            return parseFloat((diameter * 2).toFixed(2));
        case 'B':
            // B-type stars are slightly smaller, around 3 to 6 solar radii.
            return parseFloat((diameter * 2).toFixed(2));
        case 'A':
            // A-type stars are around 1.5 to 3 solar radii.
            return parseFloat(diameter.toFixed(2));
        case 'F':
            // F-type stars are 1.2 to 1.5 solar radii.
            return parseFloat(diameter .toFixed(2));
        case 'G':
            // G-type stars, like the Sun, are 0.96 to 1.1 solar radii.
            return parseFloat(diameter.toFixed(2));
        case 'K':
            // K-type stars are smaller, ranging from 0.7 to 0.96 solar radii.
            return parseFloat((diameter * 3).toFixed(2));
        case 'M':
            if(diameter > 1) {
                return parseFloat((diameter * 6).toFixed(2)); 
            } else {
                return parseFloat(diameter.toFixed(2));
            }
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
