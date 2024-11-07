import { findClosestMeshes } from '@/lib/constructors/scenes/helpers/findClosestMeshes';
import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import sceneState from '@/lib/constructors/scenes/SceneState';

export function focusOnObject(object: any, camera: Camera, scene: Scene) {
    const babylonScene = scene.getScene();
    sceneState.setActiveObject(object);
    sceneState.setObjectsToRender(findClosestMeshes(babylonScene, object.mesh));
    camera.focusOnMesh(object.mesh, 150, 1000);
}
