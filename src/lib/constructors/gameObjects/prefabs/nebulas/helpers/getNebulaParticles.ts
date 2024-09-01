import * as BABYLON from 'babylonjs';
import { BlueNebulaParticles } from '@/lib/constructors/gameObjects/prefabs/nebulas/particles/BlueNebulaParticles'
import { RedNebulaParticles } from '@/lib/constructors/gameObjects/prefabs/nebulas/particles/RedNebulaParticles'

// Define the ParticleSystems interface
export interface ParticleSystems {
    nebula: any;
}

// Function to get Particle Systems based on star type
export function getParticleSystems(scene: BABYLON.Scene, type: string, mesh: BABYLON.Mesh, diameter: number): ParticleSystems {
    // Define the emitter for corona particles
    const emitter = new BABYLON.SphereParticleEmitter();
    emitter.radius = 1;
    emitter.radiusRange = 0;

    switch(type) {
        case 'Blue':
            return {
                nebula: new BlueNebulaParticles(scene, mesh, emitter),
            };
        case 'Red':
            return {
                nebula: new RedNebulaParticles(scene, mesh, emitter),
            };
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
