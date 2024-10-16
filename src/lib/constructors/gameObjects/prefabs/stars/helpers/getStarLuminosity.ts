import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

// Function to get the star diameter based on type
export function getStarLuminosity(type: string, diameter: number): number {

    switch(type) {
        case 'O':
            return getRandomNumberBetween(3, 15); // Range for O-type stars
        case 'B':
            return getRandomNumberBetween(1.5, 3.25); // Range for B-type stars
        case 'A':
            return getRandomNumberBetween(1, 1.5); // Range for A-type stars
        case 'F':
            return getRandomNumberBetween(1, 1.25); // Range for F-type stars
        case 'G':
            return getRandomNumberBetween(1.5, 2); // Range for G-type stars
        case 'K':
            return getRandomNumberBetween(1, 2); // Range for K-type stars
        case 'M':
            if(diameter > 1) {
                return getRandomNumberBetween(0.7, 1.5); // Example range for M-type stars
            } else {
                return getRandomNumberBetween(0.5, 0.8); // Example range for M-type stars
            }
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
