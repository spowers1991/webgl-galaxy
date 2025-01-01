import * as BABYLON from 'babylonjs';
import sunFlareTexture from '@/assets/T_SunFlare.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class KTypeFlareParticles {
    public particleSystem: BABYLON.ParticleSystem;
    public particleCount: number;
    public type: string;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, diameter: number) {

        this.particleSystem = new BABYLON.ParticleSystem("flareParticles", 2, scene);

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

        this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 0.91, 0.251, getRandomNumberBetween(0.05, 0.1)));
        this.particleSystem.addColorGradient(0.75, new BABYLON.Color4(0, 0, 0, 1));

        if(diameter > 1.5) {
            this.type = "giant"
            this.particleSystem.minScaleX = diameter * getRandomNumberBetween(2, 3);
            this.particleSystem.minScaleY = diameter * getRandomNumberBetween(2, 3);
            this.particleSystem.maxScaleX = diameter * getRandomNumberBetween(2, 3);
            this.particleSystem.maxScaleY = diameter * getRandomNumberBetween(2, 3);
        }
        else {
            this.type = "dwarf"
            this.particleSystem.minScaleX = diameter * getRandomNumberBetween(2, 3);
            this.particleSystem.minScaleY = diameter * getRandomNumberBetween(2, 3);
            this.particleSystem.maxScaleX = diameter * getRandomNumberBetween(2, 3);
            this.particleSystem.maxScaleY = diameter * getRandomNumberBetween(2, 3);
        }

        this.particleSystem.addSizeGradient(0, 0);
        this.particleSystem.addSizeGradient(1, 1);

        this.particleSystem.minLifeTime = 6.0;
        this.particleSystem.maxLifeTime = 8.0;

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
