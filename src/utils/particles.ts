import * as BABYLON from 'babylonjs';

export interface Particles {
    particleTexture: string;
    preWarmStepOffset: number;
    preWarmCycles: number;
    minInitialRotation: number;
    maxInitialRotation: number;
    colorGradients: { offset: number, color: BABYLON.Color4 }[];
    minSize?: number;
    maxSize?: number;
    minLifeTime: number;
    maxLifeTime: number;
    emitRate: number;
    blendMode: number;
    gravity: BABYLON.Vector3;
    minAngularSpeed: number;
    maxAngularSpeed: number;
    minEmitPower: number;
    maxEmitPower: number;
    updateSpeed: number;
    isBillboardBased: boolean;
    renderingGroupId: number;
    minScaleX?: number;
    minScaleY?: number;
    maxScaleX?: number;
    maxScaleY?: number;
    sizeGradients?: { offset: number, size: number }[];
}