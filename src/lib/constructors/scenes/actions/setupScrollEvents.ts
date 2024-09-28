import * as BABYLON from 'babylonjs';
import cameraState from '../../cameras/CameraState'; 

export function getCameraCurrentRange(scene: BABYLON.Scene, camera: BABYLON.ArcRotateCamera): void {
    scene.onPointerObservable.add((pointerInfo) => {
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERWHEEL:
                const distance = camera.radius;
                cameraState.setCameraCurrentRange(distance); 
                break;
        }
    });
}
