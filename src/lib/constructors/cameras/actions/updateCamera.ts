import * as BABYLON from 'babylonjs';
import { focusOnMesh } from './focusOnMesh'; 
import { calculateZoomSensitivity } from '../helpers/calculateZoomSensitivity'; 

export function updateCamera(camera: BABYLON.ArcRotateCamera, activeObject: any) {

    if (activeObject && activeObject.starConfig && activeObject.starConfig.diameter) {
        const cameraZoomDistance = activeObject.starConfig.diameter * 3;
        
        camera.lowerRadiusLimit = cameraZoomDistance;

        camera.wheelDeltaPercentage = calculateZoomSensitivity(activeObject.starConfig.diameter);

        if (activeObject.pickedMesh) {
            focusOnMesh(camera, activeObject.pickedMesh, cameraZoomDistance, 5000);  
        }

    } else {
        camera.lowerRadiusLimit = 5; // Fallback to default value
        camera.wheelDeltaPercentage = 0.01; // Fallback to default sensitivity
    }
}
