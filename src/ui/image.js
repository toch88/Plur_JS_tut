import {BaseElement} from './base-element.js';

export class Image extends BaseElement{
    constructor(filename){
        super();
        this.fileName=filename
    }

    getElementString(){
        return `<img src="${this.fileName}" style="width: 100%">`;
    }
}