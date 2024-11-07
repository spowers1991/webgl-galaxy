import { html } from '@/utils/html';

function DragButton() {
    const dragButtonElement = document.createElement('div');
    dragButtonElement.classList.add('toggle-button');

    dragButtonElement.innerHTML = html`
        <div 
            style="
                position: relative;
                padding: 10px 20px;
                background-color: white;
                color: black;
                cursor: pointer;
            ">     
            &#8943;
        </div>
    `;

    return dragButtonElement;
}

export default DragButton;
