import { html } from '@/utils/html';

interface FilterProperty {
    key: string;
    values: string[];
}

interface FilterSelectProps {
    propertiesToFilter: FilterProperty[];
    handleFilterChange: (event: Event) => void;
}

export default function FilterSelect({ propertiesToFilter, handleFilterChange }: FilterSelectProps) {
    const selectElements = propertiesToFilter.map(property => {
        // Sort the values in descending order, handling numbers and strings
        const sortedValues = property.values.sort((a, b) => {
            const numA = parseFloat(a);
            const numB = parseFloat(b);

            // If both values are numbers, compare numerically
            if (!isNaN(numA) && !isNaN(numB)) {
                return numB - numA;
            }

            // If values are not numbers, compare them alphabetically
            return b.localeCompare(a);
        });

        return html`
            <select data-property="${property.key}" class="filter-select" style="padding: 5px;">
                <option value="">Select ${property.key}</option>
                ${sortedValues.map(value =>
                    html`<option value="${value}">${value}</option>`
                ).join('')}
            </select>
        `;
    }).join('');

    const attachEventListeners = () => {
        const selects = document.querySelectorAll('.filter-select');
        selects.forEach(select => {
            select.addEventListener('change', handleFilterChange);
        });
    };

    setTimeout(attachEventListeners, 0);

    return html`
        <div class="container" style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${selectElements}
        </div>
    `;
}
