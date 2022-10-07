import { galleryItems } from './gallery-items.js';
// Change code below this line

const galerryContainer = document.querySelector('.gallery')
const galerryRef = createGalerryMarkup(galleryItems)

galerryContainer.insertAdjacentHTML('afterbegin', galerryRef)


function createGalerryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
</div>
`;
    })
        .join(" ");
}

galerryContainer.addEventListener('click', itemOpener)



function itemOpener(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return
    }

    const bigImgresolution = event.target.dataset.source
    const instance = basicLightbox.create(`<img src="${bigImgresolution}" width="800" height="600">`)

    instance.show()


    const visible = instance.visible()
    if (visible) {
        window.addEventListener('keydown', pressEscToclose)
    }

    function pressEscToclose(event) {
    if (event.code === 'Escape') {
        instance.close()
        } 
         window.removeEventListener('keydown', pressEscToclose)
    }
   

}



