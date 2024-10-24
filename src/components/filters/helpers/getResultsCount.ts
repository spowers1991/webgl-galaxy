export function getResultsCount(filters, selectedOptions) {
    const itemFilters = filters.getFilteredItems();
    const itemsCount = document.querySelector('.items-count');

    let selectedOptionsInfo = '';

    for (let option of selectedOptions) {
        // Get keys and values dynamically for each option
        for (let key in option) {
            if (option.hasOwnProperty(key) && option[key] !=='') {
                selectedOptionsInfo += `<div style=" text-transform: capitalize;">${key}: ${option[key].toLowerCase()}</div>`;
            }
        }
    }
    
    itemsCount.innerHTML = `<div style="font-size: 18px;">${itemFilters.length}</div> `+selectedOptionsInfo+ ` items found`;
}
