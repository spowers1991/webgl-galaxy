import React from 'react';
import * as BABYLON from 'babylonjs';
import { createRoot, Root } from 'react-dom/client';
import Camera from '../cameras/Camera';
import UIComponent from './UIComponent';
import ObjectInfo from '@/components/object-info/ObjectInfo';
import Filters from '@/components/filters/Filter';

class UIEngine {
    private rootElementId: string;
    private data: Record<string, any>;
    private camera: Camera;
    private scene: BABYLON.Scene;
    private root: Root | null = null;

    constructor({ rootElementId, data, camera, scene }) {
        this.rootElementId = rootElementId;
        this.data = data;
        this.camera = camera;
        this.scene = scene;

        this.initializeRoot();
    }

    private initializeRoot() {
        const rootElement = document.getElementById(this.rootElementId);
        if (rootElement) {
            this.root = createRoot(rootElement);
            this.render();
        } else {
            console.error(`Element with id ${this.rootElementId} not found.`);
        }
    }

    private render() {
        if (this.root) {
            this.root.render(
                <div id={this.rootElementId} style={{ width: window.innerWidth < 768 ? '100%' : '500px' , display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <UIComponent name="info">
                        <ObjectInfo property={'starConfig'} />
                    </UIComponent>
                    <UIComponent name="filters">
                        <Filters items={this.data} camera={this.camera} scene={this.scene} />
                    </UIComponent>
                </div>
            );
        }
    }

    public updateData(newData: Record<string, any>) {
        this.data = newData;
        this.render();
    }

    public unmount() {
        if (this.root) {
            this.root.unmount();
            this.root = null;
        }
    }
}

export default UIEngine;
