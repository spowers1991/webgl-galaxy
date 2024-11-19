import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import cameraState from '../../cameras/CameraState'; 

export function updateScrollEvents(scene: BABYLON.Scene, camera: Camera): void {

    scene.onPointerObservable.add((pointerInfo) => {
        const distance = camera.properties?.radius;
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERWHEEL:
                cameraState.setCameraCurrentRange(distance); 
                break;
            case BABYLON.PointerEventTypes.POINTERTAP:
                cameraState.setCameraCurrentRange(distance); 
                break;
        }
    });
}
