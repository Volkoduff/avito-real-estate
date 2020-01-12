import BaseComponent from './base-component';
import {render} from "./utils";

const mainTitle = document.querySelector(`.main-section`);

export default class MainList extends BaseComponent {
    constructor() {
        super();
    }

    init(data) {
        this.items = data;
        render(mainTitle, this.getElement());
    }

    getTemplate() {
        return `<div class="gallery">
${this.items.map((listElement) => 
    `<div class="gallery-item-wrap" data-id="${listElement.id}"><h2>${listElement.title}</h2>
    <a href="details.html" target="_blank"><img src="${listElement.previewImage}" data-id="${listElement.id}" alt="Photo id№${listElement.id}"></a>
    <p class="address">${listElement.address}</p>
    <p>Цена: ${listElement.price}</p>
</div> `)
        .join(``)}</div>`
    }
}
