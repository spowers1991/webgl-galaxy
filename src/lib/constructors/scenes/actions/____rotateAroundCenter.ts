import { Vector3 } from 'babylonjs';
import GameObject from '@/lib/constructors/gameObjects/GameObject';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';

interface Position {
    x: number;
    y: number;
    z: number;
}

export function rotateAroundCenter(objects: Star[], initialPositions: Position[], angle: number) {
    if (!initialPositions || initialPositions.length !== objects.length) {
        console.error("Initial positions array is not properly set or does not match the objects array length.");
        return;
    }

    const center = new Vector3(0, 0, 0); // Assuming center of rotation is (0, 0, 0)

    for (let i = 0; i < objects.length; i++) {
        const star = objects[i];
        const initialPosition = initialPositions[i];

        if (!initialPosition) {
            console.error(`Initial position at index ${i} is undefined.`);
            continue;
        }

        // Calculate the distance from the center
        const distance = Math.sqrt(
            Math.pow(initialPosition.x - center.x, 2) +
            Math.pow(initialPosition.z - center.z, 2)
        );

        // Adjust the rotation speed based on distance
        const rotationSpeed = 1 / (distance + 1); // Add 1 to avoid division by zero

        const cosAngle = Math.cos(angle * rotationSpeed);
        const sinAngle = Math.sin(angle * rotationSpeed);

        // Calculate the new position after rotation
        const x = initialPosition.x * cosAngle - initialPosition.z * sinAngle;
        const z = initialPosition.x * sinAngle + initialPosition.z * cosAngle;

        // Update the game object's position
        star.setPosition(x, initialPosition.y, z);
        console.log(star)
        star.surfaceParticles.maxLifeTime = 0.001;
        star.flareParticles.maxLifeTime = 0.001;
        star.surfaceParticles.preWarmCycles = 0;
        star.coronaParticles.preWarmCycles = 0;
        star.coronaParticles.maxLifeTime = 0.001;
        star.coronaParticles.stop();
        star.surfaceParticles.stop();
        star.flareParticles.stop();
    }
}
