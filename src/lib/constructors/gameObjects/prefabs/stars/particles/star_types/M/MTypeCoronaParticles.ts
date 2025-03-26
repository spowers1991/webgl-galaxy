import * as BABYLON from 'babylonjs';
import starTextureRedDwarf from '@/assets/red_emission.webp';
import starTextureRedGiant from '@/assets/red_giant.webp';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class MTypeCoronaParticles {
    public particleSystem: BABYLON.ParticleSystem;
    public particleCount: number;
    public type: string;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, emitter: BABYLON.IParticleEmitterType, diameter: number) {

        this.particleSystem = new BABYLON.ParticleSystem("coronaParticles", 10, scene);

        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 100;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = emitter;

        if(diameter > 2) {
            this.type = "giant"
                this.particleSystem.particleTexture = new BABYLON.Texture(starTextureRedGiant, scene);
                this.particleSystem.minScaleX = diameter * getRandomNumberBetween(3, 6);
                this.particleSystem.minScaleY = diameter * getRandomNumberBetween(3, 6);
                this.particleSystem.maxScaleX = diameter * getRandomNumberBetween(3, 6);
                this.particleSystem.maxScaleY = diameter * getRandomNumberBetween(3, 6);
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(0.8, 0.2, 0.2, getRandomNumberBetween(0.025, 0.035)));
        }
        else {
            this.type = "dwarf"
                const textureRadius = this.particleSystem.minScaleX = diameter * getRandomNumberBetween(3, 5);
                this.particleSystem.particleTexture = new BABYLON.Texture(starTextureRedDwarf, scene);
                this.particleSystem.minScaleX = textureRadius
                this.particleSystem.minScaleY = textureRadius
                this.particleSystem.maxScaleX = textureRadius
                this.particleSystem.maxScaleY = textureRadius
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(0.8, 0.2, 0.2,  getRandomNumberBetween(0.025, 0.05)));
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
