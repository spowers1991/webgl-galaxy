// Define star types and their priority
const starTypes = [
    { type: 'O', weight: 5 },  // Very rare
    { type: 'B', weight: 3 },
    { type: 'A', weight: 5 },
    { type: 'F', weight: 10 },
    { type: 'G', weight: 30 },
    { type: 'K', weight: 10 },
    { type: 'M', weight: 50 }  // Most common
];

// Function to get a priority random star type
export function getStarTypePriority(): string {
    const totalWeight = starTypes.reduce((sum, star) => sum + star.weight, 0);
    const randomWeight = Math.random() * totalWeight;
    let cumulativeWeight = 0;

    for (const star of starTypes) {
        cumulativeWeight += star.weight;
        if (randomWeight <= cumulativeWeight) {
            return star.type;
        }
    }

    // Fallback in case of rounding issues
    return starTypes[starTypes.length - 1].type;
}
