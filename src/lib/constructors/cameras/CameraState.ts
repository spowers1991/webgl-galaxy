import { makeObservable, observable, action } from 'mobx';
import Scene from '../scenes/Scene';
import Camera from './Camera';
import { updateScrollEvents } from '../scenes/actions/updateScrollEvents';

export class CameraState {
    cameraCurrentRange: number | null = null;

    constructor() {
        makeObservable(this, {
            cameraCurrentRange: observable,
            getCameraCurrentRange: action,
            setCameraCurrentRange: action,
        });
    }

    getCameraCurrentRange(scene: any, camera: any) {
        updateScrollEvents(scene, camera); 
    }

    setCameraCurrentRange(distance: number) {
        this.cameraCurrentRange = distance;
    }

}

const cameraState = new CameraState();
export default cameraState;
