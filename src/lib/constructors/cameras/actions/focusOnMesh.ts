import * as BABYLON from 'babylonjs';
import { smoothLerp } from '@/utils/smoothLerp';

export function focusOnMesh(
    camera: BABYLON.ArcRotateCamera,
    mesh: BABYLON.AbstractMesh,
    distance?: number,
    duration: number = 5000
) {
    
    // Get the current bounding box of the mesh
    const boundingBox = mesh.getBoundingInfo().boundingBox;

    // Calculate the center of the bounding box
    const center = boundingBox.centerWorld;

    // Calculate the target distance if not provided
    const targetDistance = distance ?? camera.lowerRadiusLimit;

    // Focus the camera on the center of the bounding box
    smoothLerp(camera, camera.target, center, camera.radius, targetDistance, duration, camera.getScene());
}
