// Utility function to generate random star names similar to space simulation games
export function generateRandomStarName(): string {
    // Greek-style prefixes often used in star names
    const greekPrefixes = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Theta', 'Iota', 'Kappa', 'Lambda'];
    
    // Star catalog-style suffixes (constellations, sectors, or other space-themed terms)
    const suffixes = ['Centauri', 'Pegasi', 'Andromeda', 'Lyrae', 'Cygni', 'Aquarii', 'Leonis', 'Draconis', 'Scorpii', 'Ursae'];

    // Generate a random number and letter combination (like 'B12' or 'A7')
    const randomNumber = Math.floor(Math.random() * 100); // 0 to 99
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A to Z

    // Randomly choose a prefix and a suffix
    const prefix = greekPrefixes[Math.floor(Math.random() * greekPrefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    // Combine the parts to form a star name
    return `${prefix} ${randomLetter}${randomNumber} ${suffix}`;
}
