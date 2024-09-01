import * as BABYLON from 'babylonjs';
import sunFlareTexture from '@/assets/T_SunFlare.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class KTypeFlareParticles {
    public particleSystem: BABYLON.ParticleSystem;
    public particleCount: number;
    public type: string;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, diameter: number) {


        if(diameter > 2) {
            if(this.type = "giant"){
                this.particleCount = getRandomNumberBetween(10, 20)
            } else {
                this.particleCount = getRandomNumberBetween(5, 10)
            }
        }

        this.particleSystem = new BABYLON.ParticleSystem("flareParticles", this.particleCount, scene);

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

        this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 0.5, getRandomNumberBetween(0.01, 0.25)));
        this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.01, 0.65)));

        if(diameter > 2) {
            this.type = "giant"
        this.particleSystem.minScaleX = getRandomNumberBetween(0.75, 2);
        this.particleSystem.minScaleY = getRandomNumberBetween(0.75, 2);
        this.particleSystem.maxScaleX = getRandomNumberBetween(0.75, 2);
        this.particleSystem.maxScaleY = getRandomNumberBetween(0.75, 2);
        }
        else {
            this.type = "dwarf"
            this.particleSystem.minScaleX = getRandomNumberBetween(0.75, 1);
            this.particleSystem.minScaleY = getRandomNumberBetween(0.75, 1);
            this.particleSystem.maxScaleX = getRandomNumberBetween(0.75, 1);
            this.particleSystem.maxScaleY = getRandomNumberBetween(0.75, 1);
        }


        this.particleSystem.minLifeTime = 10.0;
        this.particleSystem.maxLifeTime = 20.0;

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
