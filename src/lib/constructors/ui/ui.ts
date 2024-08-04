import sceneState from '@/lib/constructors/scenes/SceneState';
import { StarConfig } from '@/lib/constructors/gameObjects/prefabs/stars/configs/starConfig';
import { autorun } from 'mobx';

export class UIConstructor {
    private uiElement: HTMLElement;
    
    constructor(uiElementId: string) {
        this.uiElement = document.getElementById(uiElementId) as HTMLElement;
        console.log(this.uiElement);
        if (!this.uiElement) {
            console.error(`UI element with ID ${uiElementId} not found.`);
            return;
        }

        this.initialize();
    }

    private initialize() {
        // Set up your initial UI elements here
        this.uiElement.innerHTML = `
            <div id="star-info" style="position: absolute; background: #fff; left: 0; bottom: 0; padding: 12px">
                <p id="star-name">Name: </p>
                <p id="star-type">Type: </p>
                <p id="star-diameter">Diameter: </p>
                <p id="star-luminosity">Luminosity: </p>
            </div>
        `;
        console.log('Initial UI setup done');

        // Observe global state for updates
        this.observeGlobalState();
    }

    private observeGlobalState() {
        autorun(() => {
            const activeObject = sceneState.getActiveObject();
            if (activeObject?.starConfig) {
                this.updateUI(activeObject.starConfig);
            }
        });
    }

    private updateUI(starConfig: StarConfig) {
        if (!this.uiElement) return;
        // Update the UI elements with the star's information
        (document.getElementById('star-name') as HTMLElement).textContent = `Name: ${starConfig.name || 'N/A'}`;
        (document.getElementById('star-type') as HTMLElement).textContent = `Type: ${starConfig.type+' Type' || 'N/A'}`;
        (document.getElementById('star-diameter') as HTMLElement).textContent = `Diameter: ${starConfig.diameter || 'N/A'}`;
        (document.getElementById('star-luminosity') as HTMLElement).textContent = `Luminosity: ${starConfig.luminosity || 'N/A'}`;
    }
}
