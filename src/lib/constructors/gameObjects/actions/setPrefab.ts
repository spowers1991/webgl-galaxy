// actions/setPrefab.ts
import * as BABYLON from 'babylonjs';

export function setPrefab(gameObject: any, PrefabClass: { new(scene: BABYLON.Scene, sceneConfig: any, gameObjectConfig: any): any }, sceneConfig: any, gameObjectConfig: any) {
    // Create an instance of the prefab class
    const prefabInstance = new PrefabClass(gameObject.scene, sceneConfig, gameObjectConfig);
    
    // Set the prefab property of the gameObject
    gameObject.prefab = prefabInstance;

    // Optionally, set the mesh or other properties if needed
    if (prefabInstance.mesh) {
        gameObject.setMesh(prefabInstance.mesh);
    }
}
