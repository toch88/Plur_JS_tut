import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {app} from './app.js'

export class CarsPage extends Page{
    constructor(){
        super('Cars');
    }
    
    createElement(){       
        super.createElement();
        let header="License Make Model Miles".split(' ');
        let t=new DataTable(header, app.dataService.cars);
        t.appendToElement(this.element);
       
    }

    getElementString(){
        return '<div style="margin: 20px"><h3>Cars</h3></div>';
    }
}