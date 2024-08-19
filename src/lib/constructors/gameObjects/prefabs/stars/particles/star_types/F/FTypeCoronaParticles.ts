import * as BABYLON from 'babylonjs';
import starTexture from '@/assets/T_Star.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class FTypeCoronaParticles {
    public particleSystem: BABYLON.ParticleSystem;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, emitter: BABYLON.IParticleEmitterType, diameter: number) {
        this.particleSystem = new BABYLON.ParticleSystem("coronaParticles", 20, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(starTexture, scene);
        this.particleSystem.preWarmStepOffset = 100;
        this.particleSystem.preWarmCycles = 1000;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = emitter;

        this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 0.9, 0.07, getRandomNumberBetween(0.01, 0.015)));
        this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.01, 0.015)));
        this.particleSystem.addColorGradient(1.0, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.01, 0.015)));

        this.particleSystem.minScaleX = getRandomNumberBetween(0.3, 15);
        this.particleSystem.minScaleY = getRandomNumberBetween(3, 50);
        this.particleSystem.maxScaleX = getRandomNumberBetween(0.3, 15);
        this.particleSystem.maxScaleY = getRandomNumberBetween(3, 50);


        this.particleSystem.minLifeTime = 30.0;
        this.particleSystem.maxLifeTime = 60.0;

        this.particleSystem.emitRate = 300;

        this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
        this.particleSystem.gravity = new BABYLON.Vector3(0, 0, 0); // Ensure gravity is zero
        this.particleSystem.minAngularSpeed = 0.0;
        this.particleSystem.maxAngularSpeed = 0.0;
        this.particleSystem.minEmitPower = 0.0; // Ensure emit power is zero
        this.particleSystem.maxEmitPower = 0.0; // Ensure emit power is zero
        this.particleSystem.updateSpeed = 0.01; // Ensure update speed is high for smooth movement

        this.particleSystem.isBillboardBased = true;
        this.particleSystem.renderingGroupId = 1;
    }
}
