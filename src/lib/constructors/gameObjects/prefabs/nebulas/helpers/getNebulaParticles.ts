import * as BABYLON from 'babylonjs';

import { NebulaParticles } from '../particles/nebulaParticles';

// Define the ParticleSystems interface
export interface ParticleSystems {
    nebula: NebulaParticles;
}

// Function to get Particle Systems based on star type
export function getParticleSystems(scene: BABYLON.Scene, type: string, mesh: BABYLON.Mesh, diameter: number): ParticleSystems {
    // Define the emitter for corona particles
    const emitter = new BABYLON.SphereParticleEmitter();
    emitter.radius = 1;
    emitter.radiusRange = 0;
    
    return {
        nebula: new NebulaParticles(scene, mesh, emitter),
    };
}
