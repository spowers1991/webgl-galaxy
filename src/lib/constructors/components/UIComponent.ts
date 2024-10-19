export default class UIComponent {
    public id: string;
    public content: string;
    public uiElement: HTMLElement;

    constructor(rootElement: HTMLElement, id: string, data: Object, content: string) {
        this.id = id;
        this.content = content;

        this.uiElement = document.createElement('div');
        this.uiElement.id = this.id;
        this.uiElement.innerHTML = this.content;

        rootElement.appendChild(this.uiElement);
    }

    public updateContent(newContent: string) {
        this.content = newContent;
        this.uiElement.innerHTML = this.content; 
    }
}
