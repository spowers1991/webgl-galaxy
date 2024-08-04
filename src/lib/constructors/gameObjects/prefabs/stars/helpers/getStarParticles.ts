import * as BABYLON from 'babylonjs';
import { CoronaParticles } from '../particles/coronaParticles';
import { FlareParticles } from '../particles/flareParticles';
import { SurfaceParticles } from '../particles/surfaceParticles';

import { OTypeCoronaParticles } from '../particles/star_types/O/OTypeCoronaParticles';
import { OTypeSurfaceParticles } from '../particles/star_types/O/OTypeSurfaceParticles';
import { OTypeFlareParticles } from '../particles/star_types/O/OTypeFlareParticles';

import { BTypeCoronaParticles } from '../particles/star_types/B/BTypeCoronaParticles';
import { BTypeSurfaceParticles } from '../particles/star_types/B/BTypeSurfaceParticles';
import { BTypeFlareParticles } from '../particles/star_types/B/BTypeFlareParticles';

import { ATypeCoronaParticles } from '../particles/star_types/A/ATypeCoronaParticles';
import { ATypeSurfaceParticles } from '../particles/star_types/A/ATypeSurfaceParticles';
import { ATypeFlareParticles } from '../particles/star_types/A/ATypeFlareParticles';

import { FTypeCoronaParticles } from '../particles/star_types/F/FTypeCoronaParticles';
import { FTypeSurfaceParticles } from '../particles/star_types/F/FTypeSurfaceParticles';
import { FTypeFlareParticles } from '../particles/star_types/F/FTypeFlareParticles';

import { GTypeCoronaParticles } from '../particles/star_types/G/GTypeCoronaParticles';
import { GTypeSurfaceParticles } from '../particles/star_types/G/GTypeSurfaceParticles';
import { GTypeFlareParticles } from '../particles/star_types/G/GTypeFlareParticles';

import { KTypeCoronaParticles } from '../particles/star_types/K/KTypeCoronaParticles';
import { KTypeSurfaceParticles } from '../particles/star_types/K/KTypeSurfaceParticles';
import { KTypeFlareParticles } from '../particles/star_types/K/KTypeFlareParticles';

import { MTypeCoronaParticles } from '../particles/star_types/M/MTypeCoronaParticles';
import { MTypeSurfaceParticles } from '../particles/star_types/M/MTypeSurfaceParticles';
import { MTypeFlareParticles } from '../particles/star_types/M/MTypeFlareParticles';

// Define the ParticleSystems interface
export interface ParticleSystems {
    corona: CoronaParticles;
    flare: FlareParticles;
    surface: SurfaceParticles;
}

// Function to get Particle Systems based on star type
export function getParticleSystems(scene: BABYLON.Scene, type: string, mesh: BABYLON.Mesh, diameter: number): ParticleSystems {
    // Define the emitter for corona particles
    const emitter = new BABYLON.SphereParticleEmitter();
    emitter.radius = 1;
    emitter.radiusRange = 0;

    switch(type) {
        case 'O':
            return {
                corona: new OTypeCoronaParticles(scene, mesh, emitter, diameter),
                flare: new OTypeFlareParticles(scene, mesh, diameter),
                surface: new OTypeSurfaceParticles(scene, mesh, diameter),
            };
        case 'B':
            return {
                corona: new BTypeCoronaParticles(scene, mesh, emitter, diameter),
                flare: new BTypeFlareParticles(scene, mesh, diameter),
                surface: new BTypeSurfaceParticles(scene, mesh, diameter),
            };
        case 'A':
            return {
                corona: new ATypeCoronaParticles(scene, mesh, emitter, diameter),
                flare: new ATypeFlareParticles(scene, mesh, diameter),
                surface: new ATypeSurfaceParticles(scene, mesh, diameter),
            };
        case 'F':
            return {
                corona: new FTypeCoronaParticles(scene, mesh, emitter, diameter),
                flare: new FTypeFlareParticles(scene, mesh, diameter),
                surface: new FTypeSurfaceParticles(scene, mesh, diameter)
            };
        case 'G':
            return {
                corona: new GTypeCoronaParticles(scene, mesh, emitter, diameter),
                flare: new GTypeFlareParticles(scene, mesh, diameter),
                surface: new GTypeSurfaceParticles(scene, mesh, diameter),
            };
        case 'K':
            return {
                corona: new KTypeCoronaParticles(scene, mesh, emitter, diameter),
                flare: new KTypeFlareParticles(scene, mesh, diameter),
                surface: new KTypeSurfaceParticles(scene, mesh, diameter),
            };
        case 'M':
            return {
                corona: new MTypeCoronaParticles(scene, mesh, emitter, diameter),
                flare: new MTypeFlareParticles(scene, mesh, diameter),
                surface: new MTypeSurfaceParticles(scene, mesh, diameter),
            };
        default:
            throw new Error(`Unsupported star type: ${type}`);
    }
}
