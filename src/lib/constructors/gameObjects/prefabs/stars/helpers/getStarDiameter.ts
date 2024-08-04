import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'
import { getRandomSmallerNumberBetween } from '@/utils/getRandomSmallerNumberBetween';

// Function to get the star diameter based on type
export function getStarDiameter(type: string): number {

    switch(type) {
        case 'O':
            return getRandomNumberBetween(1, 2); // Example range for O-type stars
        case 'B':
            return getRandomNumberBetween(0.2, 1); // Example range for B-type stars
        case 'A':
            return getRandomNumberBetween(0.4, 0.7); // Example range for A-type stars
        case 'F':
            return getRandomNumberBetween(0.4, 0.7); // Example range for F-type stars
        case 'G':
            return getRandomNumberBetween(0.3, 0.6); // Example range for G-type stars
        case 'K':
            return getRandomNumberBetween(0.2, 3); // Example range for K-type stars
        case 'M':
            return getRandomSmallerNumberBetween(0.2, 10); // Example range for M-type stars
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
