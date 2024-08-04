import * as BABYLON from 'babylonjs';
import { lerp } from '@/utils/lerp';

export function focusOnMesh(camera, mesh, distance = 100, duration = 2000, bleed = 1500) {
    // Get the current bounding box of the mesh
    const boundingBox = mesh.getBoundingInfo().boundingBox;

    // Calculate the center of the bounding box
    const center = boundingBox.centerWorld;

    // Create a new bounding box with a bleed zone
    const min = boundingBox.minimumWorld.subtract(new BABYLON.Vector3(bleed, bleed, bleed));
    const max = boundingBox.maximumWorld.add(new BABYLON.Vector3(bleed, bleed, bleed));
    const newBoundingBox = new BABYLON.BoundingBox(min, max);

    // Calculate the new target position which is the center of the new bounding box
    const target = newBoundingBox.centerWorld;

    // Focus the camera on the new target position
    lerp(camera, camera.target, target, camera.radius, distance, duration);
}
