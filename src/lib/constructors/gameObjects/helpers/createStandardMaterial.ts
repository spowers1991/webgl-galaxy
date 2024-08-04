import * as BABYLON from 'babylonjs';

export const createStandardMaterial = (name: string, scene: BABYLON.Scene): BABYLON.StandardMaterial => {
    return new BABYLON.StandardMaterial(name, scene);
};
