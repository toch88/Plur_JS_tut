import $ from 'jquery';

export class BaseElement{
    constructor(){
        this.element=null; //jquery obj
    }

    appendToElement(el){
        this.cretateElement();
        el.append(this.element);
    }

    cretateElement(){
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString(){
        throw 'Please override getElementString()'
    }
}