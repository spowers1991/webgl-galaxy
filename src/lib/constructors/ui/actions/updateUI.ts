import UIComponent from '../UIComponent';

export function updateUI(rootElement: HTMLElement, data: Object, components: { id: string, content: string }[]) {
    
    components.forEach(component => {
        new UIComponent(rootElement, component.id, data, component.content);
    });

}
