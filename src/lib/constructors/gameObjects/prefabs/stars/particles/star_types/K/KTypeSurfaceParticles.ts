import * as BABYLON from 'babylonjs';
import sunSurfaceTexture from '@/assets/T_SunSurface.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween'

export class KTypeSurfaceParticles {
    public particleSystem: BABYLON.ParticleSystem;
    public particleCount: number;
    public type: string;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, diameter: number) {
        
        if(this.type = "giant"){
            this.particleCount = 1500
        } else {
            this.particleCount = 500
        }

        this.particleSystem = new BABYLON.ParticleSystem("surfaceParticles", this.particleCount, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(sunSurfaceTexture, scene);
        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 100;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        const sunEmitter = new BABYLON.SphereParticleEmitter();
        sunEmitter.radius = 1;
        sunEmitter.radiusRange = 0;
        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = sunEmitter;

        if(diameter > 2) {
            this.type = "giant"
                this.particleSystem.minScaleX = diameter 
                this.particleSystem.minScaleY =  diameter 
                this.particleSystem.maxScaleX = diameter 
                this.particleSystem.maxScaleY =  diameter 
                this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.015, 0.025)));
        }
        else {
            this.type = "dwarf"
                this.particleSystem.minScaleX = diameter 
                this.particleSystem.minScaleY =  diameter 
                this.particleSystem.maxScaleX = diameter  + getRandomNumberBetween(0.1, 0.2)
                this.particleSystem.maxScaleY =  diameter + getRandomNumberBetween(0.1, 0.2)
                this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 0.6, 0.2, getRandomNumberBetween(0.005, 0.01)));
                this.particleSystem.addColorGradient(0.5, new BABYLON.Color4(0.3773, 0.0930, 0.0266, getRandomNumberBetween(0.005, 0.01)));
        }

        this.particleSystem.minLifeTime = 8.0;
        this.particleSystem.maxLifeTime = 8.0;

        this.particleSystem.emitRate = 200;

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
