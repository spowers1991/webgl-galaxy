import * as BABYLON from 'babylonjs';
import NebulaTexture from '@/assets/T_Cluster_Nebula_A.png';
import { getRandomNumberBetween } from '@/utils/getRandomNumberBetween';

export class BlueNebulaParticles {
    public particleSystem: BABYLON.ParticleSystem;
    private particlesCount: number;

    constructor(scene: BABYLON.Scene, mesh: BABYLON.Mesh, emitter: BABYLON.IParticleEmitterType) {

        this.particlesCount = Math.round(getRandomNumberBetween(10, 12))

        this.particleSystem = new BABYLON.ParticleSystem("T_Cluster_Nebula_A_Type", this.particlesCount, scene);

        this.particleSystem.particleTexture = new BABYLON.Texture(NebulaTexture, scene);
        this.particleSystem.preWarmStepOffset = 10;
        this.particleSystem.preWarmCycles = 100;
        this.particleSystem.minInitialRotation = -2 * Math.PI;
        this.particleSystem.maxInitialRotation = 2 * Math.PI;

        this.particleSystem.emitter = mesh;
        this.particleSystem.particleEmitterType = emitter;

        this.particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0.5));

        this.particleSystem.minScaleX = 500;
        this.particleSystem.minScaleY = 500;
        this.particleSystem.maxScaleX = 200;
        this.particleSystem.maxScaleY = 300;

        this.particleSystem.minLifeTime = 200.0;
        this.particleSystem.maxLifeTime = 200.0;

        this.particleSystem.emitRate = 30;

        this.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;
        this.particleSystem.gravity = new BABYLON.Vector3(0, 0, 0); // Ensure gravity is zero
        this.particleSystem.minAngularSpeed = 0.0;
        this.particleSystem.maxAngularSpeed = 0.0;
        this.particleSystem.minEmitPower = 0.0; // Ensure emit power is zero
        this.particleSystem.maxEmitPower = 0.0; // Ensure emit power is zero
        this.particleSystem.updateSpeed = 0.01; // Ensure update speed is high for smooth movement

        this.particleSystem.isBillboardBased = false;
        this.particleSystem.renderingGroupId = 1;
    }
}
