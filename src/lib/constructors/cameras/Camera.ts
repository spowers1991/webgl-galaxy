import * as BABYLON from 'babylonjs';
import { setupCamera } from './actions/setupCamera';
import { focusOnMesh } from './actions/focusOnMesh';  
import { updateMaxZoomDistance } from './actions/updateMaxZoomDistance';  
import sceneState from '@/lib/constructors/scenes/SceneState';
import { autorun } from 'mobx';

class Camera {
    private properties: BABYLON.ArcRotateCamera;

    constructor(scene: BABYLON.Scene, canvas: HTMLCanvasElement, cameraName: string, backgroundColor: BABYLON.Color4) {

        // Setup initial configuration for the camera
        this.properties = setupCamera(scene, canvas, cameraName, backgroundColor);

        // Observe global state changes
        this.observeGlobalState();
    }

    // Object methods
    focusOnMesh(mesh: BABYLON.AbstractMesh, distance?: number, duration: number = 1000, bleed: number = 500) {
        focusOnMesh(this.properties, mesh, distance, duration, bleed);
    }

    // Observable global state
    private observeGlobalState() {
        autorun(() => {
            const activeObject = sceneState.getActiveObject();
            try {
                updateMaxZoomDistance(this.properties);
                if (activeObject?.starConfig) {
                    //console.log(activeObject);
                }
            } catch (error) {
                console.error('Error updating max zoom distance:', error);
            }
        });
    }
}

export default Camera;
