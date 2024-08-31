import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import { SceneConfig } from '@/lib/constructors/scenes/configs/SceneConfig';
import { setupClickEvents } from '@/lib/constructors/scenes/actions/setupClickEvents';
import { Galaxy } from '@/lib/constructors/gameObjects/prefabs/galaxies/Galaxy';

const sceneConfig: SceneConfig = {
    numStars: 450,
    stars: [],
    maxDiameter: 400,
    densityFactor: 0.25,
    galaxyRadius: 1500,    // Maximum radius of the galaxy
    galaxyThickness: 100,  // Thickness of the galaxy in the vertical direction
    numArms: 4,            // Number of spiral arms
    spiralFactor: 5,       // Factor to control the tightness of the spirals
    clusterRadius: 100,    // Radius for O-type star clusters
};

export default class Scene {
    private config: SceneConfig;
    private scene: BABYLON.Scene;
    private camera: Camera;
    private glowLayer: BABYLON.GlowLayer; 

    constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement, config?: SceneConfig) {
        this.config = { ...sceneConfig, ...config };
        this.scene = new BABYLON.Scene(engine);
        
        // Setup environment
        const backgroundColor = new BABYLON.Color4(0, 0, 0, 1);
        this.camera = new Camera(this.scene, canvas, "Main Camera", backgroundColor);

        // Create the glow layer and add it to the scene
        this.glowLayer = new BABYLON.GlowLayer("glow", this.scene);
        this.glowLayer.intensity = 1.25; // Adjust intensity for performance

        const galaxy = new Galaxy(this.scene, sceneConfig);
        galaxy.generate();

        // Set up click event listener
        setupClickEvents(this, this.camera); // Pass `this` (the current scene instance)
        
    }

    getScene(): BABYLON.Scene {
        return this.scene;
    }
}
