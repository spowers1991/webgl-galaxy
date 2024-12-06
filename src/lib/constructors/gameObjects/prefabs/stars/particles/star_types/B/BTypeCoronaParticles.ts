import * as BABYLON from 'babylonjs';
import starTexture from '@/assets/T_Aura_Blue.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class BTypeCoronaParticles {
    public particleSystem: BABYLON.ParticleSystem;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, emitter: BABYLON.IParticleEmitterType, diameter: number) {
        this.particleSystem = new BABYLON.ParticleSystem("coronaParticles", 20, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(starTexture, scene);
        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 100;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = emitter;

        this.particleSystem.addColorGradient(0, new BABYLON.Color4(0.7, 0.7, 1, getRandomNumberBetween(0.75, 1)));

        this.particleSystem.minScaleX = diameter * getRandomNumberBetween(3, 6);
        this.particleSystem.minScaleY = diameter * getRandomNumberBetween(5, 10);
        this.particleSystem.maxScaleX = diameter * getRandomNumberBetween(3, 6);
        this.particleSystem.maxScaleY = diameter * getRandomNumberBetween(5, 10);

        this.particleSystem.minLifeTime = 10.0;
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
