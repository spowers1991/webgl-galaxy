import * as BABYLON from 'babylonjs';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';
import { SceneConfig } from '@/lib/constructors/scenes/configs/SceneConfig'
import { StarConfig } from '../../stars/configs/starConfig';
import { getParticleSystems } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarParticles';
import { getStarColor } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarColor';
import { getStarDiameter } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarDiameter';
import { getStarLuminosity } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarLuminosity';
import { getStarMass } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarMass';
import { getStarRadius } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarRadius';
import { getStarSurfaceTemperature } from '@/lib/constructors/gameObjects/prefabs/stars/helpers/getStarSurfaceTemperature';
import { generateRandomStarName } from '@/utils/generateRandomStarName';

export function generateStar(
    scene: BABYLON.Scene, 
    sceneConfig: SceneConfig, 
    id: number, 
    x: number, 
    z: number, 
    verticalPosition: number, 
    starType: string
) {
    const diameter = getStarDiameter(starType);
    const surfaceTemperature = getStarSurfaceTemperature(starType, diameter);

    const starConfig: StarConfig = {
        id: id,
        name: "Star " + id,
        type: starType,
        diameter: diameter,
        color: getStarColor(starType, diameter),
        luminosity: getStarLuminosity(starType, diameter),
        mass: getStarMass(starType, diameter),
        generatedName: generateRandomStarName(),
        radius: getStarRadius(starType, diameter),
        surfaceTemperature: getStarSurfaceTemperature(starType, diameter),
        particles: getParticleSystems(scene, starType, null, diameter, surfaceTemperature),
    };

    // Create star game object
    const star = new Star("Star " + id, scene, starConfig);
    
    // Set position of the star with thickness
    star.setPosition(x, verticalPosition, z);

    // Add star to sceneConfig
    sceneConfig.stars.push(star);
}
