import * as BABYLON from 'babylonjs';
import { SceneConfig } from '@/lib/constructors/scenes/configs/SceneConfig';
import { calculateSpiralRadius } from '@/lib/constructors/gameObjects/prefabs/galaxies/helpers/calculateSpiralRadius';
import { generateStar } from '@/lib/constructors/gameObjects/prefabs/galaxies/actions/generateStar';
import { getStarTypePriority } from '@/lib/constructors/gameObjects/prefabs/galaxies/helpers/getStarTypePriority';
import { setStarPosition } from '@/lib/constructors/gameObjects/prefabs/galaxies/actions/setStarPosition';

export function generateGalaxy(
    scene: BABYLON.Scene,
    sceneConfig: SceneConfig,
    oTypeClusters: { x: number, z: number }[]
) {
    const { numStars, galaxyRadius, galaxyThickness, numArms, spiralFactor, clusterRadius } = sceneConfig;

    for (let i = 0; i < numStars; i++) {
        // Calculate polar coordinates
        const theta = Math.random() * 2 * Math.PI; // Random angle
        const baseRadius = galaxyRadius * Math.sqrt(Math.random()); // Radial distance with higher density towards the center
        const adjustedRadius = calculateSpiralRadius(baseRadius, i, numStars, numArms, spiralFactor);

        const baseX = adjustedRadius * Math.cos(theta);
        const baseZ = adjustedRadius * Math.sin(theta);

        // Adding vertical thickness to the galaxy
        const verticalPosition = (Math.random() - 0.5) * galaxyThickness; // Random vertical position within the thickness range

        // Get a weighted star type
        const starType = getStarTypePriority();

        // Get the initial position of the star based on its type
        const { x, z } = setStarPosition(scene, starType, baseX, baseZ, galaxyRadius, oTypeClusters, clusterRadius);

        // Generate the star
        generateStar(scene, sceneConfig, i, x, z, verticalPosition, starType);
    }
}
