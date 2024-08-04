import * as BABYLON from 'babylonjs';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { autorun } from 'mobx';
import { StarConfig } from '@/lib/constructors/gameObjects/prefabs/stars/configs/starConfig';
import { SceneConfig } from '@/lib/constructors/scenes/configs/SceneConfig';
import lava from '@/assets/lava.jpg';

export class Star {
    public mesh: BABYLON.Mesh;
    public material: BABYLON.StandardMaterial;
    public surfaceParticles: BABYLON.ParticleSystem;
    public flareParticles: BABYLON.ParticleSystem;
    public coronaParticles: BABYLON.ParticleSystem;
    public starConfig: StarConfig;
    public sceneConfig: SceneConfig;
    private glowLayer: BABYLON.GlowLayer;
    private lavaTexture: BABYLON.Texture | null;

    constructor(scene: BABYLON.Scene, sceneConfig: SceneConfig, starConfig: StarConfig) {
        this.starConfig = starConfig; // Store the star config
        this.sceneConfig = sceneConfig; // Store the scene config

        this.mesh = BABYLON.MeshBuilder.CreateSphere('star.' + starConfig.id + '.mesh', { diameter: 2.01, segments: 64 }, scene);

        // Setup material
        this.material = new BABYLON.StandardMaterial("sun.material", scene);

        // Set emissive color and intensity
        this.material.emissiveColor = this.starConfig.color; // Base color
        this.material.emissiveColor.scaleInPlace(this.starConfig.luminosity); // Scale the emissive color for intensity

        // Load and store the lava texture
        this.lavaTexture = (this.starConfig.type === 'K' || this.starConfig.type === 'M') ? new BABYLON.Texture(lava, scene) : null;

        // Add a texture to the material if applicable
        if (this.lavaTexture) {
            this.material.diffuseTexture = this.lavaTexture;
            this.material.specularColor = new BABYLON.Color3(0, 0, 0);
        }

        this.mesh.material = this.material;

        // Create a glow layer and add the star mesh to it
        this.glowLayer = new BABYLON.GlowLayer("glow", scene);
        this.glowLayer.intensity = 0.5; // Adjust intensity for performance

        // Setup the sun emitter
        const sunEmitter = new BABYLON.SphereParticleEmitter();
        sunEmitter.radius = 1;
        sunEmitter.radiusRange = 0;

        // Setup Particles
        this.surfaceParticles = this.starConfig.particles.surface.particleSystem;
        this.flareParticles = this.starConfig.particles.flare.particleSystem;
        this.coronaParticles = this.starConfig.particles.corona.particleSystem;

        // Set emitters to the mesh
        this.surfaceParticles.emitter = this.mesh;
        this.flareParticles.emitter = this.mesh;
        this.coronaParticles.emitter = this.mesh;

        // Set rendering group ID
        this.mesh.renderingGroupId = 3;

        this.mesh.scaling = new BABYLON.Vector3(this.starConfig.diameter, this.starConfig.diameter, this.starConfig.diameter);

        // Observe global state changes
        this.observeGlobalState();
    }

    // Observable global state for active Stars
    private observeGlobalState() {
        autorun(() => {
            const objectsToRender = sceneState.getObjectsToRender().slice();
            const objectInView = objectsToRender.some(obj => obj === this.mesh);
            
            if (objectInView) {
                // Make texture visible
                if (this.lavaTexture) {
                    this.material.diffuseTexture = this.lavaTexture;
                }

                // Start particles if the condition is met
                this.surfaceParticles.start();
                this.flareParticles.start();
                this.coronaParticles.start();
                this.glowLayer.isEnabled = true;

                // Find current Star and set the entire Object to setActiveObject
                if (sceneState.getActiveObject().pickedMesh === this.mesh) {
                    sceneState.setActiveObject(this);
                    console.log(this);
                    this.flareParticles.renderingGroupId = 1;
                    this.coronaParticles.renderingGroupId = 1;
                    this.surfaceParticles.renderingGroupId = 3;
                    //console.log(sceneState.getActiveObject());
                }
            } else {
                // Make texture invisible
                this.material.diffuseTexture = null;

                // Optionally, you can stop particles if the condition is not met
                this.surfaceParticles.stop();
                this.flareParticles.stop();
                this.coronaParticles.stop();
                this.glowLayer.isEnabled = false;
            }
        });
    }
}
