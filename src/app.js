import {fleet} from './fleet-data.js'
import {FleetDataService} from './services/fleet-data-services.js';
import $ from 'jquery';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';

export class App extends ApplicationBase{
    constructor(){
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Drones', null);
        this.addRoute('Cars', null);
        this.addRoute('Map', null);   
    }
}

export let app=new App();
app.show($('body'));




