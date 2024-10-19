import { findClosestMeshes } from '@/lib/constructors/scenes/helpers/findClosestMeshes';
import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import sceneState from '@/lib/constructors/scenes/SceneState';

export function focusOnStar(star: any, camera: Camera, scene: Scene) {
    const babylonScene = scene.getScene();
    sceneState.setActiveObject(star);
    sceneState.setObjectsToRender(findClosestMeshes(babylonScene, star.mesh));
    camera.focusOnMesh(star.mesh, 20, 1000);
    if (star.starConfig.type === "M" || star.starConfig.type === "K" || star.starConfig.type === "G" || star.starConfig.type === "B") { 
        star.material.emissiveTexture.level = star.starConfig.luminosity * 2;
    }
}
