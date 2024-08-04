import * as BABYLON from 'babylonjs';

export function lerp(camera: BABYLON.ArcRotateCamera, startTarget: BABYLON.Vector3, endTarget: BABYLON.Vector3, startRadius: number, endRadius: number, duration: number) {
    let elapsedTime = 0;
    const scene = camera.getScene();
    
    const onBeforeRender = () => {
        elapsedTime += scene.getEngine().getDeltaTime();
        const t = Math.min(elapsedTime / duration, 1);

        // Lerp target
        camera.target = BABYLON.Vector3.Lerp(startTarget, endTarget, t);
        // Lerp radius
        camera.radius = BABYLON.Scalar.Lerp(startRadius, endRadius, t);

        if (t >= 1) {
            scene.onBeforeRenderObservable.removeCallback(onBeforeRender);
        }
    };

    scene.onBeforeRenderObservable.add(onBeforeRender);
}
