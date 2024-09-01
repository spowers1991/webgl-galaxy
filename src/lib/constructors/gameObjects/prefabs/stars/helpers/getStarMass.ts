import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween';

// Function to get the star mass based on type and diameter
export function getStarMass(type: string, diameter: number): number {

    switch(type) {
        case 'O':
            return getRandomNumberBetween(10, 20) + diameter ; // Range for O-type stars in solar masses
        case 'B':
            return getRandomNumberBetween(3, 15); // Range for B-type stars in solar masses
        case 'A':
            return getRandomNumberBetween(1.4, 2.1); // Range for A-type stars in solar masses
        case 'F':
            return getRandomNumberBetween(1.04, 1.4); // Range for F-type stars in solar masses
        case 'G':
            return getRandomNumberBetween(0.8, 1.04); // Range for G-type stars in solar masses
        case 'K':
            return getRandomNumberBetween(0.45, 3); // Range for K-type stars in solar masses
        case 'M':
            if (diameter > 1) {
                return getRandomNumberBetween(4, 10); // Range for larger M-type stars in solar masses
            } else {
                return getRandomNumberBetween(0.08, 0.15); // Range for smaller M-type stars in solar masses
            }
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
