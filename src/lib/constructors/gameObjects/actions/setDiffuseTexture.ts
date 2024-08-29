import * as BABYLON from 'babylonjs';

export const setDiffuseTexture = (material: BABYLON.StandardMaterial | null, diffuseTexture: BABYLON.Texture, name: string) => {
    if (material) {      
        material.diffuseTexture = diffuseTexture;
        return diffuseTexture
    } else {
        console.log('No set Material to apply Diffuse Texture')
    }
};
