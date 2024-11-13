// actions/renderUI.ts
export function renderUI(rootElement: HTMLElement, data: any[], components: any[]) {
    // Clear the root element before rendering new UI components
    rootElement.innerHTML = '';

    // Loop through each component in the components array
    components.forEach((component) => {
        //console.log(component)
        // You can access each component's uiElement here and perform additional actions if necessary
        rootElement.appendChild(component.uiElement);

        // Optionally, you can render dynamic content or pass data to the component's methods if needed
        // For example, if you have a method to update the component based on data:
        if (typeof component.update === 'function') {
            component.update(data);  // Example method that could update the component with data
        }
    });

    // Optionally, you can add other rendering logic, such as initializing certain behaviors
    // For example, handling component-specific behaviors like event listeners:
    components.forEach((component) => {
        // Example: Adding a click listener (if needed)
        component.uiElement.addEventListener('click', () => {
           // console.log(`Component ${component.id} clicked!`);
        });
    });
}
