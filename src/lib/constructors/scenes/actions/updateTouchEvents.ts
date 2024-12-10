import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import cameraState from '../../cameras/CameraState';

export function updateTouchEvents(scene: BABYLON.Scene, camera: Camera): void {

    scene.onPointerObservable.add((pointerInfo) => {
        let distance = camera.properties?.radius;
                cameraState.setCameraCurrentRange(distance); 
        switch (pointerInfo.type) {
            case BABYLON.PointerEventTypes.POINTERDOWN:
                // Handle touch start event
                cameraState.setCameraCurrentRange(distance); 
                break;

            case BABYLON.PointerEventTypes.POINTERMOVE:
                // Handle touch move event
                if (pointerInfo.event instanceof TouchEvent) {
                    cameraState.setCameraCurrentRange(distance); 
                }
                break;

            case BABYLON.PointerEventTypes.POINTERUP:
                // Handle touch end event
                cameraState.setCameraCurrentRange(distance); 
                break;
        }
    });
}
