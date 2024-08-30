import * as BABYLON from 'babylonjs';
import { logMeshNotAssignedError } from '../helpers/logMeshNotAssignedError';

export const setMaterial = (mesh: BABYLON.Mesh, material: BABYLON.StandardMaterial , name: string) => {
    if (mesh) {
        mesh.material = material;
        return material;
    } else {
        console.log('No set Material')
    }
};
