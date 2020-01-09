import API from './api';
import MainList from './main-list';
import Details from './details';
import {render, unrender} from "./utils";

const LOADING_TEXT = `Загрузка...`;
const END_POINT = `http://134.209.138.34/items`;
const api = new API({endPoint: END_POINT});
const header = document.querySelector(`.header`);
const body = document.querySelector(`body`);
const details = new Details();

export default class appController {
    init() {
        this.mainList = new MainList();
        // this._renderLoadingText();
        api.getList()
            .then((listItems) => {
                this.mainList.init(listItems);
                console.log(listItems)
            })
            .then(() => this._detailsRender())
    }

    _detailsRender() {
        [...this.mainList.getElement().children]
            .forEach((el) => el.addEventListener(`click`, (evt) => this._onClickRender(evt)))
    }

    _onClickRender(evt) {
        const id = evt.target.id;
        api.getDetailedInfo(id)
            .then((detailedInfo) => this._renderDetails(detailedInfo));
    }

    _renderDetails(data) {
        const detailsSection = document.querySelector(`.main-section-details`);
        details.init(data);
        render(detailsSection, details.getElement());
    }
    //
    // _onSubmit(evt, id) {
    //     evt.preventDefault();
    //     api.addNewComment(id, this._getFormData())
    //         .then(() => this._renderNewComment())
    //         .then(() => {
    //             this.form.reset();
    //         })
    // }
    //
    // _renderNewComment() {
    //     const emptyComment = modal.getElement().querySelector(`.empty-comment`);
    //     if (emptyComment) {
    //         emptyComment.innerHTML = ``;
    //     }
    //     const comment = new Comment(this._getFormData());
    //     const comments = modal.getElement().querySelector(`.comments`);
    //     render(comments, comment.getElement())
    // }
    //
    // _renderLoadingText() {
    //     this.loadingText = document.createElement(`div`);
    //     this.loadingText.classList.add(`loading`);
    //     this.loadingText.textContent = LOADING_TEXT;
    //     header.querySelector(`h1`).after(this.loadingText);
    // }
    //
    // _unRenderLoadingText() {
    //     unrender(this.loadingText)
    // }
    //
    // _getFormData() {
    //     let form = new FormData(modal.getElement().querySelector(`form`));
    //     const formData = {};
    //     formData.name = form.get(`Name`);
    //     formData.comment = form.get(`Comment`);
    //     formData.date = Date();
    //     return formData;
    // }
}
