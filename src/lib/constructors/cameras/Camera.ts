import * as BABYLON from 'babylonjs';
import cameraState from './CameraState';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { autorun } from 'mobx';
import { setupCamera } from './actions/setupCamera';
import { focusOnMesh } from './actions/focusOnMesh';  
import { updateCamera } from './actions/updateCamera';  

class Camera {
    public properties: BABYLON.ArcRotateCamera;

    constructor(scene: BABYLON.Scene, canvas: HTMLCanvasElement, cameraName: string, backgroundColor: BABYLON.Color4) {
        // Setup initial configuration for the camera
        this.properties = setupCamera(scene, canvas, cameraName, backgroundColor);

        cameraState.getCameraCurrentRange(scene, this.properties)

        this.observeGlobalState();
    }

    focusOnMesh(mesh: BABYLON.AbstractMesh, distance?: number, duration: number = 1000) {
        focusOnMesh(this.properties, mesh, distance, duration);
    }

    private observeGlobalState() {
        autorun(() => {
            const activeObject = sceneState.getActiveObject();
            try {
                updateCamera(this.properties, activeObject);
            } catch (error) {
                console.error('Error updating max zoom distance:', error);
            }
        });
    }
}

export default Camera;
