import UIComponent from '../UIComponent';

export function renderUI(
    rootElement: HTMLElement,
    data: Object,
    components: { name: string, content: string }[]
) {
    components.forEach(component => {
        new UIComponent(rootElement, component.name, data, component.content);
    });
}
