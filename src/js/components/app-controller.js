import API from './api';
import MainList from './main-list';
import Details from './details';
import {render} from "./utils";

const END_POINT = `http://134.209.138.34`;
const api = new API({endPoint: END_POINT});

export default class AppController {
    init() {
        const mainSection = document.querySelector(`.main-section`);
        if (mainSection) {
            this.mainList = new MainList();
            api.getList()
                .then((items) => {
                    this.mainList.init(items);
                })
                .then(() => {
                    this._onClickRender();
                })
        } else {
            const id = localStorage.getItem(`id`);
            api.getDetailedInfo(id)
                .then((itemDetailedInfo) => {
                    this._renderDetails(itemDetailedInfo);
                })
        }
    }

    _onClickRender() {
        [...this.mainList.getElement().querySelectorAll(`.gallery-item-wrap`)]
            .forEach((el) => el.addEventListener(`click`, () => {
                console.log(el.dataset.id);
                this.id = el.dataset.id;
                localStorage.setItem(`id`, this.id);
            }))
    }

    _renderDetails(data) {
        const details = new Details(data[0]);
        const detailsSection = document.querySelector(`.main-section-details`);
        render(detailsSection, details.getElement());
    }

}
