import { Draggable } from './helpers/UIDraggable';

export default class UIComponent {
    public id: string;
    public content: string;
    public uiElement: HTMLElement;
    private draggableInstance: Draggable;
    private isDraggable: boolean = false;
    private toggleButton: HTMLElement; 

    constructor(rootElement: HTMLElement, id: string, data: Object, content: any) {
        this.id = id;
        this.content = content;

        // Create the UI element
        this.uiElement = document.createElement('div');
        this.uiElement.id = this.id;
        this.uiElement.innerHTML = this.content;

        // Start with position relative and non-draggable state
        this.uiElement.style.position = 'relative';
        this.uiElement.style.width = '500px';

        // Append to the root element
        rootElement.appendChild(this.uiElement);

        // Create and store a reference to the toggle button
        this.toggleButton = document.createElement('div');
        this.toggleButton.style.position = 'relative';
        this.toggleButton.style.padding = '10px 20px';
        this.toggleButton.style.backgroundColor = "white";
        this.toggleButton.style.color = "black";
        this.toggleButton.style.opacity = "0.7";
        this.toggleButton.innerHTML = '<div> &#8943; </div>';

        // Use mousedown to toggle draggable
        this.toggleButton.onmousedown = this.toggleDraggable;
        this.toggleButton.onmouseup = this.toggleDraggable;

        // Append the toggle button to the UI element
        this.uiElement.prepend(this.toggleButton);

        // Initialize the Draggable instance but do not make it draggable yet
        this.draggableInstance = new Draggable(this.uiElement);
        this.draggableInstance.setDraggable(this.isDraggable); 
    }

    private toggleDraggable = () => {
        this.isDraggable = !this.isDraggable; // Toggle the state

        if (this.isDraggable) {
            // Enable dragging: Set position to absolute and update button appearance
            this.uiElement.style.position = 'absolute';
            //this.toggleButton.style.backgroundColor = "#ccc";
            this.toggleButton.style.opacity = "1";
        } else {
            // Disable dragging: Reset to relative position and update button appearance
            this.uiElement.style.cursor = 'default';
            this.toggleButton.style.backgroundColor = "white";
            this.toggleButton.style.opacity = "0.7";
            this.toggleButton.style.color = "black";
            this.toggleButton.style.position = 'relative';
        }

        // Update the Draggable instance to reflect the current draggable state
        this.draggableInstance.setDraggable(this.isDraggable);
    }

    // Method to update the content of the UI element
    public updateContent(newContent: string) {
        this.content = newContent;
        this.uiElement.innerHTML = this.content;
    }
}
