import BaseComponent from './base-component';

export default class Details extends BaseComponent {
    constructor({id, title, description, sellerName, images}) {
        super();
        this._id = id;
        this._titleText = title;
        this._description = description;
        this._sellerName = sellerName;
        this._images = images;
        this._init();
        this.counter = 0;
    }

    _init() {
        [...this.getElement().querySelectorAll(`.arrow`)]
            .forEach((arrow) => arrow.addEventListener(`click`, (evt) => this._onArrowClickChange(evt)))
    }

    _onArrowClickChange(evt) {
        const rightArrow = evt.target.classList.contains(`right-arrow`);
        const isNotLastPicture = rightArrow && this.counter < this._images.length - 1;
        const isNotFirstPicture = !rightArrow && this.counter;
        if (isNotLastPicture) {
            this.counter++;
            this._changeImgSource();
        } else if (isNotFirstPicture){
            this.counter--;
            this._changeImgSource();
        }
    }

    _changeImgSource() {
        this.getElement().querySelector(`.gallery-photo`).src = this._images[this.counter];
    }

    getTemplate() {
        return `<div class="detailed-info">
    <h1 class="details-title">${this._titleText}</h1>
    <p class="description-text">${this._description}</p>
    <p>Имя продавца: ${this._sellerName}</p>
    <div class="detailed-photos">
    <button class="left-arrow arrow">Предыдущее фото</button>
    <img class="gallery-photo" src="${this._images[0]}" alt="Фото квартиры" data-id="${this._id}"/>
    <button class="right-arrow arrow">Следующее фото</button>
</div>
</div>`}
}
