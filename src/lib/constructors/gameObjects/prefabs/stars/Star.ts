import * as BABYLON from 'babylonjs';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { autorun } from 'mobx';
import { StarConfig } from '@/lib/constructors/gameObjects/prefabs/stars/configs/starConfig';
import { SceneConfig } from '@/lib/constructors/scenes/configs/SceneConfig';
import SunSurfaceTexture from '@/assets/T_SunSurfaceTexture.jpg';

export class Star {
    public mesh: BABYLON.Mesh;
    public material: BABYLON.StandardMaterial;
    public surfaceParticles: BABYLON.ParticleSystem;
    public flareParticles: BABYLON.ParticleSystem;
    public coronaParticles: BABYLON.ParticleSystem;
    public starConfig: StarConfig;
    public sceneConfig: SceneConfig;
    private glowLayer: BABYLON.GlowLayer; // Reference to the shared glow layer
    private sunSurfaceTexture: BABYLON.Texture | null;

    constructor(scene: BABYLON.Scene, sceneConfig: SceneConfig, starConfig: StarConfig) {
        this.starConfig = starConfig; // Store the star config
        this.sceneConfig = sceneConfig; // Store the scene config

        this.mesh = BABYLON.MeshBuilder.CreateSphere('star.' + starConfig.id + '.mesh', { diameter: 2.01, segments: 64 }, scene);

        // Setup material
        this.material = new BABYLON.StandardMaterial("sun.material", scene);

        // Set emissive color and intensity
        this.material.emissiveColor = this.starConfig.color; // Base color
        this.material.emissiveColor.scaleInPlace(this.starConfig.luminosity); // Scale the emissive color for intensity

        // Load and store the SunSurfaceTexture texture
        this.sunSurfaceTexture = (this.starConfig.type === 'K' || this.starConfig.type === 'M') ? new BABYLON.Texture(SunSurfaceTexture, scene) : null;

        // Add a texture to the material if applicable
        if (this.sunSurfaceTexture) {
            this.material.diffuseTexture = this.sunSurfaceTexture;
            this.material.specularColor = new BABYLON.Color3(0, 0, 0);
        }

        this.mesh.material = this.material;

        // Remove glow layer creation from here
        // this.glowLayer = new BABYLON.GlowLayer("glow", scene);
        // this.glowLayer.intensity = 0.5;

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

    // Method to set the glow layer
    public setGlowLayer(glowLayer: BABYLON.GlowLayer) {
        this.glowLayer = glowLayer;
        this.glowLayer.addIncludedOnlyMesh(this.mesh);
    }

    // Observable global state for active Stars
    private observeGlobalState() {
        autorun(() => {
            const objectsToRender = sceneState.getObjectsToRender().slice();
            const objectInView = objectsToRender.some(obj => obj === this.mesh);
            
            if (objectInView) {
                // Make texture visible
                if (this.sunSurfaceTexture) {
                    this.material.diffuseTexture = this.sunSurfaceTexture;
                }

                // Start particles if the condition is met
                this.surfaceParticles.start();
                this.flareParticles.start();
                this.coronaParticles.start();
                if (this.glowLayer) {
                    //this.glowLayer.isEnabled = true;
                }

                // Find current Star and set the entire Object to setActiveObject
                if (sceneState.getActiveObject().pickedMesh === this.mesh) {
                    sceneState.setActiveObject(this);
                    //console.log(this);
                    this.flareParticles.renderingGroupId = 1;
                    this.coronaParticles.renderingGroupId = 1;
                    //this.surfaceParticles.renderingGroupId = 3;
                }
            } else {
                // Make texture invisible
                this.material.diffuseTexture = null;

                // Optionally, you can stop particles if the condition is not met
                this.surfaceParticles.stop();
                this.flareParticles.stop();
                this.coronaParticles.stop();
                if (this.glowLayer) {
                    //this.glowLayer.isEnabled = false;
                }
            }
        });
    }
}
