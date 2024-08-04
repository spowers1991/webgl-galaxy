// src/SceneState.ts
import { makeObservable, observable } from 'mobx';
import * as BABYLON from 'babylonjs';
import setActiveObject from './actions/setActiveObject';
import setObjectsToRender from './actions/setObjectsToRender';
import getActiveObject from './helpers/getActiveObject';
import getObjectsToRender from './helpers/getObjectsToRender';

export class SceneState {
    activeObject: BABYLON.PointerEventTypes | null = null;
    objectsToRender: BABYLON.Mesh[] = [];

    constructor() {
        makeObservable(this, {
            activeObject: observable,
            objectsToRender: observable,
        });
    }

    setActiveObject(value: any | null) {
        setActiveObject(this, value);
    }

    getActiveObject(): any | null {
        return getActiveObject(this);
    }

    setObjectsToRender(value: any | null) {
        setObjectsToRender(this, value);
    }

    getObjectsToRender(): any | null {
        return getObjectsToRender(this);
    }
}

const sceneState = new SceneState();
export default sceneState;
