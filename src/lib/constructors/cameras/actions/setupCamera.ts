import * as BABYLON from 'babylonjs';

export function setupCamera(
    scene: BABYLON.Scene,
    canvas: HTMLCanvasElement,
    name: string,
    backgroundColor: BABYLON.Color4,
    
): BABYLON.ArcRotateCamera {
    // Create the ArcRotateCamera
    const camera = new BABYLON.ArcRotateCamera(name, 1, 0.8, 150, new BABYLON.Vector3(0.0, 0.0, 0.0), scene);

    // Attach control to the canvas
    camera.attachControl(canvas, true);

    // Set camera ID
    camera.id = camera.name.toLowerCase().replace(/ /g, '_');
    
    // Set initial maximum zoom distance and other properties
    camera.lowerRadiusLimit = 15;
    camera.upperRadiusLimit = 10000;
    camera.minZ = 0.25;

    // Set the scene's clear color
    scene.clearColor = backgroundColor;

    // Return the configured camera
    return camera;
}
