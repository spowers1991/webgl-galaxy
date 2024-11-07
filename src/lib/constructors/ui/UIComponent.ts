import { html } from '@/utils/html'; 

export default class UIComponent {
    public id: string;
    public content: string;
    public uiElement: HTMLElement;

    constructor(rootElement: HTMLElement, id: string, data: Object, content: any) {
        this.id = id;
        this.content = content;

        // Create the UI element
        this.uiElement = document.createElement('div');
        this.uiElement.id = this.id;
        this.uiElement.innerHTML = this.content;
        this.uiElement.style.maxWidth = '500px';

        // Append to the root element
        rootElement.appendChild(this.uiElement);
    }
}
