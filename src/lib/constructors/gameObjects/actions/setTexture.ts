import * as BABYLON from 'babylonjs';
import { createStandardMaterial } from '../helpers/createStandardMaterial';
import { logMeshNotAssignedError } from '../helpers/logMeshNotAssignedError';

export const setTexture = (mesh: BABYLON.Mesh | null, textureUrl: string, scene: BABYLON.Scene, name: string) => {
    if (mesh) {
        const material = createStandardMaterial(name + "-material", scene);
        material.diffuseTexture = new BABYLON.Texture(textureUrl, scene);
        mesh.material = material;
    } else {
        logMeshNotAssignedError(name);
    }
};
