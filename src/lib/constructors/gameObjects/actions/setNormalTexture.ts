import * as BABYLON from 'babylonjs';
import { logMeshNotAssignedError } from '../helpers/logMeshNotAssignedError';

export const setNormalTexture = (material: BABYLON.StandardMaterial | null, normalTexture: BABYLON.Texture, name: string) => {
    if (material) {      
        return normalTexture
    } else {
        logMeshNotAssignedError(name);
    }
};
