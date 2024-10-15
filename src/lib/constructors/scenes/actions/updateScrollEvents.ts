import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import cameraState from '../../cameras/CameraState'; 

export function updateScrollEvents(scene: BABYLON.Scene, camera: Camera): void {

    scene.onPointerObservable.add((pointerInfo) => {
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERWHEEL:
                const distance = camera.properties?.radius;
                cameraState.setCameraCurrentRange(distance); 
                break;
        }
    });
}
