import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import UIComponent from './UIComponent';
import { renderUI } from './actions/renderUI';

// Components
import ObjectInfo from '@/components/object-info/ObjectInfo';
import Filter from '@/components/filters/Filter';
import Map from '@/components/map/Map'; 

export default class UIEngine {
    private rootElement: HTMLElement;
    private components: UIComponent[];  

    constructor(rootElementId: string, data: any[], camera: Camera, scene: Scene) {
        this.rootElement = document.getElementById(rootElementId) as HTMLElement;

        this.components = [
            new UIComponent(this.rootElement, 'ObjectInfo', data, ObjectInfo('starConfig')),
            new UIComponent(this.rootElement, 'Filter', data,  Filter(data, camera, scene)),
            new UIComponent(this.rootElement, 'Map', data,  Map(data)),
            // Add more components as necessary
        ];

        this.initialize(data);
    }

    private initialize(data: Object[]) {
        renderUI(this.rootElement, data, this.components);
    }
}
