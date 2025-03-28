import { findClosestMeshes } from '@/lib/constructors/scenes/helpers/findClosestMeshes';
import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import sceneState from '@/lib/constructors/scenes/SceneState';

export function focusOnObject(object: any, camera: Camera, scene: Scene | any) {
    //const babylonScene = scene.getScene();
    sceneState.setActiveObject(object);
    sceneState.setObjectsToRender(findClosestMeshes(scene, object.mesh));
    camera.focusOnMesh(object.mesh, 25, 1000);
}
