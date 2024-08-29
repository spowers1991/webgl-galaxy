import * as BABYLON from 'babylonjs';
import { setPosition } from './actions/setPosition';
import { setMesh } from './actions/setMesh'; 
import { setMaterial } from './actions/setMaterial';
import { setNormalTexture } from './actions/setNormalTexture';
import { setDiffuseTexture } from './actions/setDiffuseTexture';
import { setEmissiveColor } from './actions/setEmissiveColor';
import { setSpecularColor } from './actions/setSpecularColor';

export default class GameObject {
    public name: string;
    public scene: BABYLON.Scene;
    public mesh: BABYLON.Mesh | null;
    public material: BABYLON.StandardMaterial  | null;
    public normalTexture: BABYLON.Texture | null;
    public diffuseTexture: BABYLON.Texture | null;
    public specularColor: BABYLON.Color3 | null;
    public gameObjectConfig: any;

    constructor(
        name: string,
        scene: BABYLON.Scene,
        gameObjectConfig?: any
    ) {
        this.name = name;
        this.scene = scene;
        this.mesh = null;
        this.material = null;
        this.normalTexture = null;
        this.diffuseTexture = null;
        this.specularColor = null;
        this.gameObjectConfig = gameObjectConfig;
    }

    setPosition(x: number, y: number, z: number) {
        setPosition(this.mesh, x, y, z, this.name);
    }

    setMesh(mesh: BABYLON.Mesh) {
        this.mesh = setMesh(mesh); 
    }

    setMaterial(material: BABYLON.StandardMaterial) {
        this.material = setMaterial( this.mesh, material, this.name);  
    }

    setNormalTexture(normalTexture: BABYLON.Texture) {
        this.normalTexture = setNormalTexture(this.material, normalTexture, this.name);
    }

    setDiffuseTexture(diffuseTexture: BABYLON.Texture) {
        if(this.normalTexture) {
            this.diffuseTexture = setDiffuseTexture(this.material, diffuseTexture, this.name);
        }
    }

    setSpecularColor(specularColor: BABYLON.Color3) {
        this.specularColor = setSpecularColor(this.material, specularColor, this.name);
    }

    setEmissiveColor(color: BABYLON.Color3, luminosity: number) {
        setEmissiveColor(this.material, color, luminosity, this.name);
    }

}
