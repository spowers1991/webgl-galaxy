import * as BABYLON from 'babylonjs';
import { Star } from '@/lib/constructors/gameObjects/prefabs/stars/Star';
import GameObject from '@/lib/constructors/gameObjects/GameObject';
import { SceneConfig } from '../configs/SceneConfig';
import { StarConfig } from '../../gameObjects/prefabs/stars/configs/starConfig';
import { getParticleSystems } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarParticles';
import { getStarColor } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarColor';
import { getStarDiameter } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarDiameter';
import { getStarLuminosity } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarLuminosity';

// Define star types and their weights
const starTypes = [
    { type: 'O', weight: 5 },  // Very rare
    { type: 'B', weight: 3 },
    { type: 'A', weight: 5 },
    { type: 'F', weight: 10 },
    { type: 'G', weight: 30 },
    { type: 'K', weight: 10 },
    { type: 'M', weight: 50 }  // Most common
];

// Function to get a weighted random star type
function getWeightedStarType(): string {
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

// Function to generate cluster positions for O-type stars
function generateClusterPosition(centerX: number, centerZ: number, clusterRadius: number): { x: number, z: number } {
    const angle = Math.random() * 2 * Math.PI;
    const radius = clusterRadius * Math.sqrt(Math.random());
    return {
        x: centerX + radius * Math.cos(angle),
        z: centerZ + radius * Math.sin(angle)
    };
}

export function generateObjects(scene: BABYLON.Scene, sceneConfig: SceneConfig, glowLayer: BABYLON.GlowLayer) {
    const numStars = sceneConfig.numStars;
    const galaxyRadius = 1000; // Maximum radius of the galaxy
    const galaxyThickness = 20; // Thickness of the galaxy in the vertical direction
    const numArms = 4; // Number of spiral arms
    const armSpacing = 2 * Math.PI / numArms; // Angle between spiral arms
    const spiralFactor = 5; // Factor to control the tightness of the spirals

    const oTypeClusters = []; // To store cluster centers for O-type stars
    const clusterRadius = 50; // Radius for O-type star clusters

    for (let i = 0; i < numStars; i++) {
        // Calculate polar coordinates
        const theta = Math.random() * 2 * Math.PI; // Random angle
        const radius = galaxyRadius * Math.sqrt(Math.random()); // Radial distance with higher density towards the center

        // Adjust the radius to increase the level of spiraling
        const spiralAngle = (i / numStars) * 2 * Math.PI * numArms; // Angle along the spiral arms
        const r = radius * (1 + spiralFactor * Math.sin(spiralAngle));

        const baseX = r * Math.cos(theta);
        const baseZ = r * Math.sin(theta);

        // Adding vertical thickness to the galaxy
        const verticalPosition = (Math.random() - 0.5) * galaxyThickness; // Random vertical position within the thickness range

        // Get a weighted star type
        const starType = getWeightedStarType();
        let x = baseX;
        let z = baseZ;

        if (starType === 'O' || starType === 'B' || starType === 'A') {
            // Check if we have existing clusters
            if (oTypeClusters.length > 0 && Math.random() < 0.7) { // 70% chance to join an existing cluster
                const clusterCenter = oTypeClusters[Math.floor(Math.random() * oTypeClusters.length)];
                const clusterPos = generateClusterPosition(clusterCenter.x, clusterCenter.z, clusterRadius);
                x = clusterPos.x;
                z = clusterPos.z;
            } else {
                // Create a new cluster center
                oTypeClusters.push({ x: baseX, z: baseZ });
            }
        } else if (starType === 'M') {
            // Spread M-type stars more uniformly
            x = baseX + (Math.random() - 0.5) * galaxyRadius * 0.1;
            z = baseZ + (Math.random() - 0.5) * galaxyRadius * 0.1;
        }

        const diameter = getStarDiameter(starType);
        const starConfig: StarConfig = {
            id: i,
            name: "Star " + i,
            type: starType,
            diameter: diameter,
            color: getStarColor(starType, diameter),
            luminosity: getStarLuminosity(starType, diameter),
            particles: getParticleSystems(scene, starType, null, diameter),
        };

        // Create star game object
        const star = new GameObject("Star " + i, scene, Star, sceneConfig, starConfig);
        
        // Set position of the star with thickness
        star.setPosition(x, verticalPosition, z);

        // Set glow layer for the star
        (star.prefab as Star)?.setGlowLayer(glowLayer);

        // Add star to sceneConfig
        sceneConfig.stars.push(star);
    }
}
