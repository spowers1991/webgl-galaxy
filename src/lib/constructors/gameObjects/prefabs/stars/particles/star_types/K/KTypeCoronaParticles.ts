import * as BABYLON from 'babylonjs';
import starAuraTextureGiant from '@/assets/T_Aura_Blue.png';
import starAuraTextureDwarf from '@/assets/T_SunSurface.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class KTypeCoronaParticles {
    public particleSystem: BABYLON.ParticleSystem;
    public particleCount: number;
    public type: string;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, emitter: BABYLON.IParticleEmitterType, diameter: number) {

        this.particleSystem = new BABYLON.ParticleSystem("coronaParticles", 5, scene);

        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 1000;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = emitter;

        if(diameter > 2) {
            this.type = "giant"
                this.particleSystem.particleTexture = new BABYLON.Texture(starAuraTextureGiant, scene);
                this.particleSystem.minScaleX = diameter * getRandomNumberBetween(5, 10)
                this.particleSystem.minScaleY = diameter * getRandomNumberBetween(5, 10)
                this.particleSystem.maxScaleX = diameter * getRandomNumberBetween(5, 10)
                this.particleSystem.maxScaleY = diameter * getRandomNumberBetween(5, 10)
                this.particleSystem.addColorGradient(0.0, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.1, 0.5)));
                this.particleSystem.addColorGradient(0.25, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.1, 0.5)));
                this.particleSystem.addColorGradient(0.75, new BABYLON.Color4(1, 1, 0.5,  getRandomNumberBetween(0.1, 0.75)));
        }
        else {
            this.type = "dwarf"
                this.particleSystem.particleTexture = new BABYLON.Texture(starAuraTextureDwarf, scene);
                this.particleSystem.minScaleX = getRandomNumberBetween(1, 3);
                this.particleSystem.minScaleY = getRandomNumberBetween(1, 3);
                this.particleSystem.maxScaleX = getRandomNumberBetween(1, 3);
                this.particleSystem.maxScaleY = getRandomNumberBetween(1, 3);
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 0.5, getRandomNumberBetween(0.009, 0.01)));
                this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.1, 0.03)));
                this.particleSystem.addColorGradient(1.0, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.01, 0.02)));
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
