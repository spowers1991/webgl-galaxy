import * as BABYLON from 'babylonjs';
import { logMeshNotAssignedError } from '../helpers/logMeshNotAssignedError';

export const setMaterial = (mesh: BABYLON.Mesh | null, material: BABYLON.Material, name: string) => {
    if (mesh) {
        mesh.material = material;
    } else {
        logMeshNotAssignedError(name);
    }
};
