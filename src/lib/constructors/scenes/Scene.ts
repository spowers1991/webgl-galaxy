import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import { SceneConfig } from '@/lib/constructors/scenes/configs/SceneConfig';
import { generateObjects } from '@/lib/constructors/scenes/actions/generateObjects';
import { UIConstructor } from '@/lib/constructors/ui/ui';
import { clickEvent } from '@/lib/constructors/scenes/actions/clickEvent';

const sceneConfig: SceneConfig = {
    numStars: 250,
    stars: [],
    maxDiameter: 400,
    densityFactor: 0.25, 
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

        // Create multiple stars at random positions
        generateObjects(this.scene, this.config);

        // Set up click event listener
        clickEvent(this, this.camera); // Pass `this` (the current scene instance)
        
        // Set up User Interface
        const uiConstructor = new UIConstructor('ui-container');
    }

    getScene(): BABYLON.Scene {
        return this.scene;
    }
}
