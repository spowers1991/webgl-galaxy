import { autorun, toJS } from 'mobx';
import uiState from '@/lib/constructors/ui/UIState';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { html } from '@/utils/html';
import ObjectInfoProperties from './ObjectInfoProperties';

export default function ObjectInfo(property: string) {

    let content = null;

    const renderHTML = () => {
        return html`
            <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; position: relative; background: rgba(0,0,0, 0.7); border: 2px solid #ccc; overflow: hidden;">
                <div class="object-info-container" style="display: flex; flex-direction: column; gap: 10px;">
            
                </div>
            </div>
        `;
    }

    setTimeout(() => {
        const objectInfoContainer = document.querySelector('.object-info-container');
        autorun(() => {
            const activeObject = sceneState.getActiveObject();
            objectInfoContainer.innerHTML = ObjectInfoProperties(activeObject, property);
    
            const uiComponents = uiState.getComponents();
            content = toJS(uiComponents[0]);
            console.log(content)
        });
        renderHTML(); 
    }, 0);

    return renderHTML();
}
