import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '../scenes/Scene';
import { updateUI } from './actions/updateUI'; 

// Components
import StarsListing from './views/StarsListing';

export default class UIEngine {
    private rootElement: HTMLElement;
    private components: { id: string, content: any }[];  

    constructor(rootElementId: string, data: any[], camera: Camera, scene: Scene) {
        this.rootElement = document.getElementById(rootElementId) as HTMLElement

        this.components = [
            { id: 'ui-section', content: StarsListing(data, camera, scene) },
            // Add more components if necessary
        ];

        this.initialize(data);
  
    }

    private initialize(data: Object[]) {
        updateUI(this.rootElement, data, this.components);
    }
}


