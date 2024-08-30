import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { findClosestMeshes } from '@/lib/constructors/scenes/helpers/findClosestMeshes'; 

export function clickEvent(Scene: Scene, camera: Camera) {
    const scene = Scene.getScene(); // Get the BABYLON.Scene instance

    scene.onPointerObservable.add((pointerInfo) => {
        if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERPICK) {
            const pickResult = pointerInfo.pickInfo;
            if (pickResult?.hit && pickResult.pickedMesh) {
                
                const zoomDistance = 50; // Specify the desired zoom distance
                const duration = 1000; // Specify the duration in milliseconds

                camera.focusOnMesh(pickResult.pickedMesh, zoomDistance, duration);

                sceneState.setActiveObject(pickResult); // Use the custom Scene method to add current Mesh to be the activeObject (Re-assign to an Object sharing the same mesh in a Prefab)
                sceneState.setObjectsToRender(findClosestMeshes(scene, pickResult.pickedMesh));
            }
        }
    });
}
