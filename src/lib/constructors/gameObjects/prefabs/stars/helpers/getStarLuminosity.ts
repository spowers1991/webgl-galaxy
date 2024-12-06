import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

// Function to get the star diameter based on type
export function getStarLuminosity(type: string, diameter: number): number {

    switch(type) {
        case 'O':
            return getRandomNumberBetween(3, 15); 
        case 'B':
            return getRandomNumberBetween(1.5, 3.25); 
        case 'A':
            return getRandomNumberBetween(1, 1.5); 
        case 'F':
            return getRandomNumberBetween(1, 1.25); 
        case 'G':
            return getRandomNumberBetween(2.5, 3); 
        case 'K':
            return getRandomNumberBetween(2, 3);
        case 'M':
            if(diameter > 1) {
                return getRandomNumberBetween(1, 1.5); 
            } else {
                return getRandomNumberBetween(2, 2.5); 
            }
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
