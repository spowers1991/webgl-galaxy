// utils/elementToString.ts
export function renderComponent(element: HTMLElement): string {
    const container = document.createElement('div');
    container.appendChild(element);
    return container.innerHTML;
}
