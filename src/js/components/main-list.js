import BaseComponent from './base-component';
import {render} from "./utils";

const mainTitle = document.querySelector(`.header h1`);

export default class MainList extends BaseComponent {
    constructor() {
        super();
    }

    init(mainList) {
        this.mainList = mainList;
        render(mainTitle, this.getElement());
    }

    getTemplate() {
        return `<div class="gallery">
${this.mainList.map((listElement) => 
    `<h2>${listElement.title}</h2>
    <p class="address">${listElement.address}</p>
    <a href="details.html"><img src="${listElement.previewImage}" data-id="${listElement.id}" alt="Photo id№${listElement.id}"></a>
    <p>Цена: ${listElement.price}</p>`)
        .join(``)}</div>`
    }
}
