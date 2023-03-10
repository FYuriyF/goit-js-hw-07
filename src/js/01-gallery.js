import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryElements = document.querySelector(".gallery");

const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryElements.insertAdjacentHTML("beforeend", cardsMarkup);

galleryElements.addEventListener("click", onGalleryElement);

function createGalleryCardsMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src="${preview}" 
        data-source="${original}"
        alt = "${description}"
        />
      </a>
    </div>
    `;
		})
		.join("");
}

function onGalleryElement(evt) {
	if (!evt.target.classList.contains("gallery__image")) {
		return;
	}
	const modalElement = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" alt ="${evt.target.alt}" >`);

	modalElement.show();
	console.log(evt.target);
}
// console.log(galleryItems);
