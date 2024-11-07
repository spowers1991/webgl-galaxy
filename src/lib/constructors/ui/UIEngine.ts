import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import { renderUI } from './actions/renderUI'; 
import { autorun } from 'mobx';

// Components
import ObjectInfo from '@/components/object-info/ObjectInfo';
import Filter from '@/components/filters/Filter';

import uiState from './UIState';

export default class UIEngine {
    private rootElement: HTMLElement;
    private components: { name: string, content: any }[];  

    constructor(rootElementId: string, data: any[], camera: Camera, scene: Scene) {
        this.rootElement = document.getElementById(rootElementId) as HTMLElement

        this.components = [
            { name: 'ObjectInfo', content: ObjectInfo('starConfig') },
            { name: 'Filter', content: Filter(data, camera, scene) },
            // Add more components if necessary
        ];

        uiState.setComponents(this.components);

        this.initialize(data);

        this.observeGlobalState();
  
    }

    private initialize(data: Object[]) {
        renderUI(this.rootElement, data, this.components);
    }

    private observeGlobalState() {
        autorun(() => {  
            const uiStateArray = uiState.getComponents();
            const uiComponents = uiStateArray.slice();
            console.log(uiComponents);
        })
    }
}


