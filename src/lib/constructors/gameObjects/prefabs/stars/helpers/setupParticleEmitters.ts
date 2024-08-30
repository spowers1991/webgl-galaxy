// src/helpers/setupParticles.ts
import * as BABYLON from 'babylonjs';
import { StarConfig } from '@/lib/constructors/gameObjects/prefabs/stars/configs/starConfig';

export function setupParticleEmitters(
    mesh: BABYLON.Mesh,
    starConfig: StarConfig,
    starInstance: any // Adjust this type if necessary
) {
    // Setup Particles
    const surfaceParticles = starConfig.particles.surface.particleSystem;
    const flareParticles = starConfig.particles.flare.particleSystem;
    const coronaParticles = starConfig.particles.corona.particleSystem;

    // Set emitters to the mesh
    surfaceParticles.emitter = mesh;
    flareParticles.emitter = mesh;
    coronaParticles.emitter = mesh;

    // Set the particle systems directly on the starInstance
    starInstance.surfaceParticles = surfaceParticles;
    starInstance.flareParticles = flareParticles;
    starInstance.coronaParticles = coronaParticles;
}
