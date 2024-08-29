import * as BABYLON from 'babylonjs';
import { logMeshNotAssignedError } from '../helpers/logMeshNotAssignedError';

export const setEmissiveColor = (material: BABYLON.StandardMaterial  | null, color: BABYLON.Color3, luminosity: number, name: string) => {
    if (material) {
        material.emissiveColor = color;
        material.emissiveColor.scaleInPlace(luminosity);
    } else {
        logMeshNotAssignedError(name);
    }
};
