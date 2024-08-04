import * as BABYLON from 'babylonjs';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { focusOnMesh } from './focusOnMesh';  // Adjust the path based on your project structure

export function updateMaxZoomDistance(camera: BABYLON.ArcRotateCamera) {
    const activeObject = sceneState.getActiveObject();
    if (activeObject && activeObject.starConfig && activeObject.starConfig.diameter) {
        const newDistance = activeObject.starConfig.diameter * 3;
        camera.lowerRadiusLimit = newDistance;

        // Smoothly transition to the new distance if there's an active object
        if (activeObject.pickedMesh) {
            focusOnMesh(camera, activeObject.pickedMesh, newDistance, 2000);  // Duration is set to 2000ms for smooth transition
        }
    } else {
        camera.lowerRadiusLimit = 5; // Fallback to default value
    }
}
