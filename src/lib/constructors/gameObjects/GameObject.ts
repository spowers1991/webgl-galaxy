import * as BABYLON from 'babylonjs';
import { setPosition } from './actions/setPosition';
import { setMesh } from './actions/setMesh'; // Import the function
import { setMaterial } from './actions/setMaterial';
import { setTexture } from './actions/setTexture';
import { setEmissiveColor } from './actions/setEmissiveColor';
import { setPrefab } from './actions/setPrefab'; // Import the function

export default class GameObject {
    public name: string;
    public scene: BABYLON.Scene;
    public mesh: BABYLON.Mesh | null;
    public prefab: any | null;
    public gameObjectConfig: any;

    constructor(
        name: string,
        scene: BABYLON.Scene,
        PrefabClass?: { new(scene: BABYLON.Scene, sceneConfig: any, gameObjectConfig: any): any },
        sceneConfig?: any,
        gameObjectConfig?: any
    ) {
        this.name = name;
        this.scene = scene;
        this.mesh = null;
        this.prefab = null;
        this.gameObjectConfig = gameObjectConfig;

        if (PrefabClass && sceneConfig && gameObjectConfig) {
            this.setPrefab(PrefabClass, sceneConfig, gameObjectConfig);
        }
    }

    setPosition(x: number, y: number, z: number) {
        if (this.mesh) {
            setPosition(this.mesh, x, y, z, this.name);
        }
    }

    setMesh(mesh: BABYLON.Mesh) {
        this.mesh = setMesh(this.name, mesh); // Use the imported function
    }

    setMaterial(material: BABYLON.Material) {
        if (this.mesh) {
            setMaterial(this.mesh, material, this.name);
        }
    }

    setTexture(textureUrl: string) {
        if (this.mesh) {
            setTexture(this.mesh, textureUrl, this.scene, this.name);
        }
    }

    setEmissiveColor(color: BABYLON.Color3) {
        if (this.mesh) {
            setEmissiveColor(this.mesh, color, this.name);
        }
    }

    setPrefab(PrefabClass: { new(scene: BABYLON.Scene, sceneConfig: any, gameObjectConfig: any): any }, sceneConfig: any, gameObjectConfig: any) {
        setPrefab(this, PrefabClass, sceneConfig, gameObjectConfig); // Use the imported function
    }
}
