// src/SceneState.ts
import { makeObservable, observable } from 'mobx';
import UIComponent from './UIComponent';

export class UIState {
    components: UIComponent| null = null;

    constructor() {
        makeObservable(this, {
            components: observable,
        });
    }

    setComponents(value: any | null) {
        this.components = value;
    }

    getComponents(): any | null {
       return this.components;
    }
}

const uiState = new UIState();
export default uiState;
