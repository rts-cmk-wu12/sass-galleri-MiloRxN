export function modal() {
    const galleryImages = document.querySelectorAll('.main__gallery img');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal__content');
    
    if (galleryImages) {
        console.log(modalContent);
        galleryImages.forEach((image) => {
            image.addEventListener('click', () => {
                modalContent.children[1].src = image.src;
                modal.style.display = 'flex';
            });
        });

        modal.children[0].addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

