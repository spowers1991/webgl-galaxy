import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import { SceneConfig } from './configs/SceneConfig';
import { updateClickEvents } from './actions/updateClickEvents';
import { updateScrollEvents } from './actions/updateScrollEvents';
import { Galaxy } from '@/lib/constructors/gameObjects/prefabs/galaxies/Galaxy';
import UIEngine from '@/lib/constructors/ui/UIEngine';

const sceneConfig: SceneConfig = {
    numStars: 200,
    stars: [],
    densityFactor: 0.5,
    galaxyRadius: 300,    // Maximum radius of the galaxy
    galaxyThickness: 150,  // Thickness of the galaxy in the vertical direction
    numArms: 4,            // Number of spiral arms
    spiralFactor: 5,       // Factor to control the tightness of the spirals
    clusterRadius: 50,    // Radius for O-type star clusters
};

export default class Scene {
    private config: SceneConfig;
    private scene: BABYLON.Scene;
    private camera: Camera;
    private glowLayer: BABYLON.GlowLayer;

    constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement, config?: SceneConfig) {
        this.config = { ...sceneConfig, ...config }; // Merge provided config with defaults
        this.scene = new BABYLON.Scene(engine);

        // Setup environment
        const backgroundColor = new BABYLON.Color4(0, 0, 0, 1);
        this.camera = new Camera(this.scene, canvas, "Main Camera", backgroundColor);

        // Setup glow layer
        this.glowLayer = new BABYLON.GlowLayer("glow", this.scene);
        this.glowLayer.intensity = 1.25;

        // Create galaxy
        const galaxy = new Galaxy(this.scene, sceneConfig);
        galaxy.generate();

        // Setup input events
        updateClickEvents(this.scene, this.camera);
        updateScrollEvents(this.scene, this.camera);

        // Initialize UI engine (fix constructor call)
        this.initializeUIEngine();
    }

    private initializeUIEngine() {
        // Ensure the root element for the UI exists before passing it to UIEngine
        const rootElementId = 'ui-container';

        if (!document.getElementById(rootElementId)) {
            console.error(`Element with id ${rootElementId} not found in the DOM.`);
            return;
        }

        // Pass the necessary data to the UIEngine constructor
        new UIEngine({
            rootElementId: rootElementId, // Ensure the UI is attached to the DOM element with id 'ui-container'
            data: this.config.stars,       // Use the stars data from the scene config
            camera: this.camera,           // Pass the camera to the UI
            scene: this.scene,             // Pass the BabylonJS scene to the UI
        });
    }

    getScene(): BABYLON.Scene {
        return this.scene;
    }
}
