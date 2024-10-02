export function filter() {
    const listItemElements = Array.from(document.querySelectorAll('.explorer__list-item'))
        .filter(listItem => listItem.hasAttribute('data-category'));
    const imageElements = document.querySelectorAll('.main__gallery img');
    console.log(listItemElements);
    console.log(imageElements);

    listItemElements.forEach(listItem => {
        listItem.addEventListener('click', () => {
            const category = listItem.getAttribute('data-category');
            imageElements.forEach(img => {
                if (img.getAttribute('alt') === category) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });
}

