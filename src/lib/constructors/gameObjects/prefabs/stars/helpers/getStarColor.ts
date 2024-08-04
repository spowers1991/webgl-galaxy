import * as BABYLON from 'babylonjs';

// Function to get the star color based on type
export function getStarColor(type: string, diameter: number): BABYLON.Color3 {

    switch(type) {
        case 'O':
            // O-type stars are very hot and blueish, but deep reddish for this example
            return new BABYLON.Color3(0.7, 0.7, 1); // Deep reddish color
        case 'B':
            // B-type stars are blueish white
            return new BABYLON.Color3(0.7, 0.7, 1); // Blueish white color
        case 'A':
            // A-type stars are white
            return new BABYLON.Color3(1, 1, 1); // White color
        case 'F':
            // F-type stars are yellowish white
            return new BABYLON.Color3(1, 0.9, 0.7); // Light yellowish white
        case 'G':
            // G-type stars, like our Sun, are yellow
            return new BABYLON.Color3(1, 1, 0.5); // Yellow color
        case 'K':
            // K-type stars are orange
            return new BABYLON.Color3(1, 0.6, 0.2); // Orange color
        case 'M':
            // M-type stars are red
            return new BABYLON.Color3(0.8, 0.2, 0.2); // Red color
        // Add more cases as needed
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
