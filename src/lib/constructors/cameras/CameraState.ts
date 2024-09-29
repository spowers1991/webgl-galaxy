import { makeObservable, observable, action } from 'mobx';
import * as BABYLON from 'babylonjs';
import { getCameraCurrentRange } from '../scenes/actions/setupScrollEvents';

export class CameraState {
    cameraCurrentRange: number | null = null;

    constructor() {
        makeObservable(this, {
            cameraCurrentRange: observable,
            getCameraCurrentRange: action,
            setCameraCurrentRange: action,
        });
    }

    getCameraCurrentRange(scene: BABYLON.Scene, camera: BABYLON.ArcRotateCamera) {
        getCameraCurrentRange(scene, camera); 
    }

    setCameraCurrentRange(distance: number) {
        this.cameraCurrentRange = distance;
    }

}

const cameraState = new CameraState();
export default cameraState;
