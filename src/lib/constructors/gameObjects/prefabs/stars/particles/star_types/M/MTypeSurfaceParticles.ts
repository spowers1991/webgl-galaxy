import * as BABYLON from 'babylonjs';
import sunSurfaceTexture from '@/assets/T_SunSurface.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class MTypeSurfaceParticles {
    public particleSystem: BABYLON.ParticleSystem;
    public particleCount: number;
    public type: string;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, diameter: number) {

        this.particleSystem = new BABYLON.ParticleSystem("surfaceParticles", 500, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(sunSurfaceTexture, scene);
        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 100;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        const sunEmitter = new BABYLON.SphereParticleEmitter();
        sunEmitter.radius = 0.93;
        sunEmitter.radiusRange = 0;
        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = sunEmitter;

        

        if(diameter > 1) {
            this.type = "giant"
                this.particleSystem.minScaleX = diameter 
                this.particleSystem.minScaleY =  diameter 
                this.particleSystem.maxScaleX = diameter + 0.11
                this.particleSystem.maxScaleY =  diameter + 0.1
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(0.68, 0.17, 0.17, getRandomNumberBetween(0.01, 0.05))); 
                this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.68, 0.17, 0.17, getRandomNumberBetween(0.01, 0.05))); 
        }
        else {
            this.type = "dwarf"
                //sunEmitter.radius = 0.51;
                this.particleSystem.minScaleX = diameter 
                this.particleSystem.minScaleY =  diameter 
                this.particleSystem.maxScaleX = diameter + 0.06
                this.particleSystem.maxScaleY =  diameter + 0.06
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(0.68, 0.17, 0.17, getRandomNumberBetween(0.001, 0.001))); 
                this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.68, 0.17, 0.17, getRandomNumberBetween(0.001, 0.001))); 
        }

        this.particleSystem.minLifeTime = 8.0;
        this.particleSystem.maxLifeTime = 8.0;

        this.particleSystem.emitRate = 600;

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
