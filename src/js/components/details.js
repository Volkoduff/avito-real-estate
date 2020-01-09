import BaseComponent from './base-component';

export default class Details extends BaseComponent {
    constructor({id, title, description, selleName, images}) {
        super();
        this.id = id;
        this.titleText = title;
        this.description = description;
        this.sellerName = sellerName;
        this.images = images;
    }

    getTemplate() {
        return `<div class="detailed-info">
    <h2 class="detailes-title">${this.titleText}</h2>
    <p class="description-text">${this.description}</p>
    <p>Имя продавца: ${this.sellerName}</p>
    <div class="detailed-photos">${this.images.map((url) => `<img src="${url}" alt="Фото квартиры ${this.id}" />`)}</div>
</div>`
    }
}
