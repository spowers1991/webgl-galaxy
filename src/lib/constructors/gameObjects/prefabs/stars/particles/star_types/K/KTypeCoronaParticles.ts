import * as BABYLON from 'babylonjs';
import starTexture from '@/assets/T_Star.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class KTypeCoronaParticles {
    public particleSystem: BABYLON.ParticleSystem;
    public particleCount: number;
    public type: string;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, emitter: BABYLON.IParticleEmitterType, diameter: number) {

        if(this.type = "giant"){
            this.particleCount = 100
        } else {
            this.particleCount = 50
        }

        this.particleSystem = new BABYLON.ParticleSystem("coronaParticles", this.particleCount, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(starTexture, scene);
        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 1000;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = emitter;

        if(diameter > 2) {
            this.type = "giant"
                this.particleSystem.minScaleX = diameter * getRandomNumberBetween(1,2)
                this.particleSystem.minScaleY = diameter * getRandomNumberBetween(1,2)
                this.particleSystem.maxScaleX = diameter * getRandomNumberBetween(1,2)
                this.particleSystem.maxScaleY = diameter * getRandomNumberBetween(1,2)
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 0.5,  getRandomNumberBetween(0.01, 0.01)));
                this.particleSystem.addColorGradient(0.25, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.01, 0.01)));
                this.particleSystem.addColorGradient(0.75, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.01, 0.01)));
        }
        else {
            this.type = "dwarf"
                this.particleSystem.minScaleX = getRandomNumberBetween(0.1, 2);
                this.particleSystem.minScaleY = getRandomNumberBetween(0.1, 2);
                this.particleSystem.maxScaleX = getRandomNumberBetween(0.1, 2);
                this.particleSystem.maxScaleY = getRandomNumberBetween(0.1, 2);
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 0.5, getRandomNumberBetween(0.009, 0.01)));
                this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.009, 0.003)));
                this.particleSystem.addColorGradient(1.0, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.009, 0.01)));
        }

        this.particleSystem.minLifeTime = 100.0;
        this.particleSystem.maxLifeTime = 200.0;

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
