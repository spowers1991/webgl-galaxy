export class Draggable {
    private element: HTMLElement;
    private offsetX: number = 0;
    private offsetY: number = 0;
    private isDragging: boolean = false;
    private isEnabled: boolean = true; // To track if dragging is enabled
    private static lastSelectedElement: HTMLElement | null = null; 

    constructor(element: HTMLElement) {
        this.element = element;
        this.initialize();
    }

    private initialize() {      
        // Attach event listeners
        this.element.addEventListener('mousedown', this.onMouseDown);
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    public setDraggable(enabled: boolean) {
        console.log('draggable element: '+this.element)
        this.isEnabled = enabled;
        this.element.style.cursor = enabled ? 'move' : 'default'; // Change cursor style based on state

        // If dragging is disabled, reset the state
        if (!enabled) {
            this.isDragging = false;
        }
    }

    private onMouseDown = (event: MouseEvent) => {
        if (!this.isEnabled) return; // Ignore if dragging is disabled

        const targetElement = event.target as HTMLElement;

        // Prevent dragging if the target is an interactive element
        if (['SELECT', 'INPUT', 'BUTTON'].includes(targetElement.tagName)) {
            return; 
        }

        // Prevent dragging if the target is the "renderCanvas"
        const renderCanvas = document.getElementById('renderCanvas');
        if (renderCanvas && renderCanvas.contains(targetElement)) {
            return; // Don't start dragging on renderCanvas
        }

        // Set zIndex for the currently dragged element and reset the last selected one
        if (Draggable.lastSelectedElement && Draggable.lastSelectedElement !== this.element) {
            Draggable.lastSelectedElement.style.zIndex = '1'; // Lower the zIndex of the previous element
        }

        this.element.style.zIndex = '3'; // Bring the new element to the front
        Draggable.lastSelectedElement = this.element; // Update the last selected element

        // Get the offset of the mouse position relative to the element
        this.offsetX = event.clientX - this.element.getBoundingClientRect().left;
        this.offsetY = event.clientY - this.element.getBoundingClientRect().top;

        this.isDragging = true; // Start dragging

        // Prevent default behavior to avoid selecting text
        event.preventDefault();
    };

    private onMouseMove = (event: MouseEvent) => {
        if (this.isDragging) {
            // Calculate the new position
            const newX = event.clientX - this.offsetX;
            const newY = event.clientY - this.offsetY;

            // Update the position of the element
            this.element.style.left = `${newX}px`;
            this.element.style.top = `${newY}px`;
        }
    };

    private onMouseUp = () => {
        this.isDragging = false; // Stop dragging
    };

    public destroy() {
        this.element.removeEventListener('mousedown', this.onMouseDown);
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    }
}
