import * as BABYLON from 'babylonjs';
import sunFlareTexture from '@/assets/T_SunFlare.png';

export class FTypeFlareParticles {
    public particleSystem: BABYLON.ParticleSystem;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, diameter: number) {
        this.particleSystem = new BABYLON.ParticleSystem("flareParticles", 20, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(sunFlareTexture, scene);
        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 100;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        const sunEmitter = new BABYLON.SphereParticleEmitter();
        sunEmitter.radius = 1;
        sunEmitter.radiusRange = 0;
        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = sunEmitter;

        this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 0.9, 0.4, 0.25));

        this.particleSystem.minScaleX = 0.5;
        this.particleSystem.minScaleY = 0.5;
        this.particleSystem.maxScaleX = 1.0;
        this.particleSystem.maxScaleY = 1.0;

        this.particleSystem.addSizeGradient(0, 0);
        this.particleSystem.addSizeGradient(1, 1);

        this.particleSystem.minLifeTime = 10.0;
        this.particleSystem.maxLifeTime = 10.0;

        this.particleSystem.emitRate = 1;

        this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
        this.particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        this.particleSystem.minAngularSpeed = 0.0;
        this.particleSystem.maxAngularSpeed = 0.0;
        this.particleSystem.minEmitPower = 0.001;
        this.particleSystem.maxEmitPower = 0.01;

        this.particleSystem.isBillboardBased = true;
        this.particleSystem.renderingGroupId = 2;
    }
}
