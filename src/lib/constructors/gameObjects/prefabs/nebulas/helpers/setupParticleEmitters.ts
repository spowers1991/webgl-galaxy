// src/helpers/setupParticles.ts
import * as BABYLON from 'babylonjs';
import { NebulaConfig } from '@/lib/constructors/gameObjects/prefabs/nebulas/configs/NebulaConfig';

export function setupParticleEmitters(
    mesh: BABYLON.Mesh,
    nebulaConfig: NebulaConfig,
    nebulaInstance: any // Adjust this type if necessary
) {

    // Setup Particles
    const nebulaParticles = nebulaConfig.particles.nebula.particleSystem;

    // Set emitters to the mesh
    nebulaParticles.emitter = mesh;

    // Set the particle systems directly on the starInstance
    nebulaInstance.nebulaParticles = nebulaParticles;
}
