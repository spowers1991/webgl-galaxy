import * as BABYLON from 'babylonjs';
import { calculateClusterPosition } from '@/lib/constructors/gameObjects/prefabs/galaxies/helpers/calculateClusterPosition';
import Nebula from '@/lib/constructors/gameObjects/prefabs/nebulas/Nebula';
import { NebulaConfig } from '@/lib/constructors/gameObjects/prefabs/nebulas/configs/NebulaConfig';
import { getParticleSystems } from '../../nebulas/helpers/getNebulaParticles';

export function setStarPosition(
    scene: BABYLON.Scene,
    starType: string, 
    baseX: number, 
    baseZ: number, 
    galaxyRadius: number, 
    oTypeClusters: { x: number, z: number }[], 
    clusterRadius: number
): { x: number, z: number } {
    let x = baseX;
    let z = baseZ;

    if (starType === 'O' || starType === 'B' || starType === 'A') {
        // Join an existing cluster or create a new one
        if (oTypeClusters.length > 0 && Math.random() < 0.7) {
            const clusterCenter = oTypeClusters[Math.floor(Math.random() * oTypeClusters.length)];
            const clusterPos = calculateClusterPosition(clusterCenter.x, clusterCenter.z, clusterRadius);
            x = clusterPos.x;
            z = clusterPos.z;

        } else {
            // Create a new cluster center
            const clusterCenter = { x: baseX, z: baseZ };
            oTypeClusters.push(clusterCenter);

            // Create and position a new Nebula at the center of the new cluster
            const nebulaConfig: NebulaConfig = {
                id: oTypeClusters.length, // Use the cluster length as an ID for uniqueness
                name: "Nebula",
                type: "Blue",
                diameter: 10,
                particles: getParticleSystems(scene, "Blue", null, 10),
                color: new BABYLON.Color3(1, 0.5, 0.5), // Example color, adjust as needed
                luminosity: 1.0 // Example luminosity, adjust as needed
            };

            new Nebula("Nebula " + nebulaConfig.id, scene, nebulaConfig, clusterCenter);

            // Set the star position to the cluster center
            x = clusterCenter.x;
            z = clusterCenter.z;
        }
    } else if (starType === 'M') {
        // Spread M-type stars more uniformly
        x += (Math.random() - 0.5) * galaxyRadius * 0.1;
        z += (Math.random() - 0.5) * galaxyRadius * 0.1;
    }

    return { x, z };
}
