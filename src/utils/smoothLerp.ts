import * as BABYLON from 'babylonjs';

function easeInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function smoothLerp(
    camera: BABYLON.ArcRotateCamera,
    startTarget: BABYLON.Vector3,
    endTarget: BABYLON.Vector3,
    startRadius: number,
    endRadius: number,
    duration: number,
    scene: BABYLON.Scene
) {
    let elapsedTime = 0;

    const onBeforeRender = () => {
        elapsedTime += scene.getEngine().getDeltaTime();
        const t = Math.min(elapsedTime / duration, 2);

        // Apply easing to t
        const easedT = easeInOut(t);

        // Lerp target smoothly
        camera.target = BABYLON.Vector3.Lerp(startTarget, endTarget, easedT);
        // Lerp radius smoothly
        camera.radius = BABYLON.Scalar.Lerp(startRadius, endRadius, easedT);

        if (t >= 1) {
            scene.onBeforeRenderObservable.removeCallback(onBeforeRender);
        }
    };

    scene.onBeforeRenderObservable.add(onBeforeRender);
}
