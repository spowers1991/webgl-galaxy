import * as BABYLON from 'babylonjs';
import { focusOnMesh } from './actions/focusOnMesh';  // Adjust the path based on your project structure
import { updateMaxZoomDistance } from './actions/updateMaxZoomDistance';  // Adjust the path based on your project structure
import sceneState from '@/lib/constructors/scenes/SceneState';
import { autorun } from 'mobx';

class Camera {
    private properties: BABYLON.ArcRotateCamera;

    constructor(scene: BABYLON.Scene, canvas: HTMLCanvasElement, name: string, backgroundColor: BABYLON.Color4, maxZoomDistance: number = 5) {
        this.properties = new BABYLON.ArcRotateCamera(name, 1, 0.8, 1500, new BABYLON.Vector3(0.0, 0.0, 0.0), scene);
        this.properties.attachControl(canvas, true);
        this.properties.id = this.properties.name.toLowerCase().replace(/ /g, '_');
        
        // Set initial maximum zoom distance
        this.properties.lowerRadiusLimit = 15;

        this.properties.minZ = 0.25;

        scene.clearColor = backgroundColor;

        // Observe global state changes
        this.observeGlobalState();
    }

    public focusOnMesh(mesh: BABYLON.AbstractMesh, distance?: number, duration: number = 1000, bleed: number = 500) {
        const targetDistance = distance ?? this.properties.lowerRadiusLimit * 5;
        focusOnMesh(this.properties, mesh, targetDistance, duration, bleed);
    }

    // Observable global state for active Stars
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
