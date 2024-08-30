import * as BABYLON from 'babylonjs';
import sunSurfaceTexture from '@/assets/T_SunSurface.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class GTypeSurfaceParticles {
    public particleSystem: BABYLON.ParticleSystem;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, diameter: number) {
        this.particleSystem = new BABYLON.ParticleSystem("surfaceParticles", 400, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(sunSurfaceTexture, scene);
        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 1000;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        const sunEmitter = new BABYLON.SphereParticleEmitter();
        sunEmitter.radius = 1;
        sunEmitter.radiusRange = 0;
        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = sunEmitter;

        this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 0.5, getRandomNumberBetween(0.01, 0.05)));
        this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(1, 0.6, 0.2, getRandomNumberBetween(0.01, 0.025)));

        this.particleSystem.minSize = 0.1;
        this.particleSystem.maxSize = diameter

        this.particleSystem.minLifeTime = 8.0;
        this.particleSystem.maxLifeTime = 8.0;

        this.particleSystem.emitRate = 200;

        this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
        this.particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        this.particleSystem.minAngularSpeed = -0.4;
        this.particleSystem.maxAngularSpeed = 0.4;
        this.particleSystem.minEmitPower = 0;
        this.particleSystem.maxEmitPower = 0;
        this.particleSystem.updateSpeed = 0.005;

        this.particleSystem.isBillboardBased = false;
        this.particleSystem.renderingGroupId = 3;
    }
}
