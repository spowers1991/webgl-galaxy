import * as BABYLON from 'babylonjs';
import { logMeshNotAssignedError } from '../helpers/logMeshNotAssignedError';

export const setPosition = (mesh: BABYLON.Mesh | null, x: number, y: number, z: number, name: string) => {
    if (mesh) {
        mesh.position.set(x, y, z);
    } else {
        logMeshNotAssignedError(name);
    }
};
