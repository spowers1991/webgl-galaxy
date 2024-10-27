import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import { renderUI } from './actions/renderUI'; 

// Components
import ObjectInfo from '@/components/object-info/ObjectInfo';
import Filter from '@/components/filters/Filter';

export default class UIEngine {
    private rootElement: HTMLElement;
    private components: { id: string, content: any }[];  

    constructor(rootElementId: string, data: any[], camera: Camera, scene: Scene) {
        this.rootElement = document.getElementById(rootElementId) as HTMLElement

        this.components = [
            { id: 'object-info', content: ObjectInfo('starConfig') },
            { id: 'filter', content: Filter(data, camera, scene) },
            // Add more components if necessary
        ];

        this.initialize(data);
  
    }

    private initialize(data: Object[]) {
        renderUI(this.rootElement, data, this.components);
    }
}


