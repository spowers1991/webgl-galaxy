import * as BABYLON from 'babylonjs';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

// Function to get the star diameter based on type
export function getStarLuminosity(type: string, diameter: number): number {

    switch(type) {
        case 'O':
            return getRandomNumberBetween(3, 5); // Example range for O-type stars
        case 'B':
            return getRandomNumberBetween(1.5, 3.25); // Example range for B-type stars
        case 'A':
            return getRandomNumberBetween(1, 1.5); // Example range for A-type stars
        case 'F':
            return getRandomNumberBetween(1, 1.25); // Example range for F-type stars
        case 'G':
            return getRandomNumberBetween(0.5, 1); // Example range for G-type stars
        case 'K':
            return getRandomNumberBetween(0.4, 1); // Example range for K-type stars
        case 'M':
            if(diameter > 1) {
                return getRandomNumberBetween(0.5, 1); // Example range for M-type stars
            } else {
                return getRandomNumberBetween(0.1, 0.5); // Example range for M-type stars
            }
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
