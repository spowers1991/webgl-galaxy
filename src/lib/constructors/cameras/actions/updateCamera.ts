import * as BABYLON from 'babylonjs';
import { focusOnMesh } from './focusOnMesh'; 
import { calculateZoomSensitivity } from '../helpers/calculateZoomSensitivity'; // Import the zoom sensitivity utility

export function updateCamera(camera: BABYLON.ArcRotateCamera, activeObject: any) {

    if (activeObject && activeObject.starConfig && activeObject.starConfig.diameter) {
        const cameraZoomDistance = activeObject.starConfig.diameter * 3;
        
        // Set the lower radius limit based on the object's size
        camera.lowerRadiusLimit = cameraZoomDistance;

        // Calculate and set the scroll wheel sensitivity
        camera.wheelDeltaPercentage = calculateZoomSensitivity(activeObject.starConfig.diameter);

        // Smoothly transition to the new distance if there's an active object
        if (activeObject.pickedMesh) {
            focusOnMesh(camera, activeObject.pickedMesh, cameraZoomDistance, 5000);  // Duration is set to 2000ms for smooth transition
        }

    } else {
        camera.lowerRadiusLimit = 5; // Fallback to default value
        camera.wheelDeltaPercentage = 0.01; // Fallback to default sensitivity
    }
}
