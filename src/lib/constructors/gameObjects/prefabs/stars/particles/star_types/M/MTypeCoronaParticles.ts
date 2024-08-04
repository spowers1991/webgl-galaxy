import * as BABYLON from 'babylonjs';
import starTexture from '@/assets/T_Star.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class MTypeCoronaParticles {
    public particleSystem: BABYLON.ParticleSystem;
    public particleCount: number;
    public type: string;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, emitter: BABYLON.IParticleEmitterType, diameter: number) {

        if(this.type = "giant"){
            this.particleCount = 20
        } else {
            this.particleCount = 10
        }

        this.particleSystem = new BABYLON.ParticleSystem("coronaParticles", this.particleCount, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(starTexture, scene);
        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 100;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = emitter;

        if(diameter > 2) {
            this.type = "giant"
                this.particleSystem.minScaleX = getRandomNumberBetween(12, 150);
                this.particleSystem.minScaleY = getRandomNumberBetween(12, 150);
                this.particleSystem.maxScaleX = getRandomNumberBetween(12, 150);
                this.particleSystem.maxScaleY = getRandomNumberBetween(12, 150);
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(0.8, 0.2, 0.2, getRandomNumberBetween(0.005, 0.0095)));
                this.particleSystem.addColorGradient(0.75, new BABYLON.Color4(0.68, 0.17, 0.17, getRandomNumberBetween(0.0009, 0.0015))); 
        }
        else {
            this.type = "dwarf"
                this.particleSystem.minScaleX = getRandomNumberBetween(0.1, 2);
                this.particleSystem.minScaleY = getRandomNumberBetween(0.1, 2);
                this.particleSystem.maxScaleX = getRandomNumberBetween(0.1, 2);
                this.particleSystem.maxScaleY = getRandomNumberBetween(0.1, 2);
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(0.8, 0.2, 0.2,  getRandomNumberBetween(0.0001, 0.0002)));
                this.particleSystem.addColorGradient(0.75, new BABYLON.Color4(0.68, 0.17, 0.17, getRandomNumberBetween(0.0001, 0.0002))); 
        }
        
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
