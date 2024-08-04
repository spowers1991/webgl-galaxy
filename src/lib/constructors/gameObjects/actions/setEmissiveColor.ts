import * as BABYLON from 'babylonjs';
import { logMeshNotAssignedError } from '../helpers/logMeshNotAssignedError';

export const setEmissiveColor = (mesh: BABYLON.Mesh | null, color: BABYLON.Color3, name: string) => {
    if (mesh && mesh.material) {
        (mesh.material as BABYLON.StandardMaterial).emissiveColor = color;
    } else {
        logMeshNotAssignedError(name);
    }
};
