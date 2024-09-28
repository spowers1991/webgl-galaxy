import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import sceneState from '@/lib/constructors/scenes/SceneState';
import cameraState from '@/lib/constructors/cameras/CameraState';
import { findClosestMeshes } from '@/lib/constructors/scenes/helpers/findClosestMeshes'; 

export function setupClickEvents(Scene: Scene, camera: Camera) {
    const scene = Scene.getScene(); // Get the BABYLON.Scene instance

    scene.onPointerObservable.add((pointerInfo) => {
        if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERPICK) {
            const pickResult = pointerInfo.pickInfo;
            if (pickResult?.hit && pickResult.pickedMesh) {          
                camera.focusOnMesh(pickResult.pickedMesh, 50, 1000);

                cameraState.setCameraCurrentRange(camera.properties.radius)
                
                sceneState.setActiveObject(pickResult); 
                sceneState.setObjectsToRender(findClosestMeshes(scene, pickResult.pickedMesh));
            }
        }
    });
}
