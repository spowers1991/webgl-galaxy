import * as BABYLON from 'babylonjs';

export const setSpecularColor = (material: BABYLON.StandardMaterial | null, specularColor: BABYLON.Color3, name: string) => {
    if (material) {      
        return specularColor
    } else {
        console.log('No Material to assign Specular Color')
    }
};
