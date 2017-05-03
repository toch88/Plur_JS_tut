import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js'
import {FleetDataService} from './services/fleet-data-services.js';
import $ from 'jquery';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js'
import {TitleBar} from './ui/title-bar.js';

let tb=new TitleBar('Our Application');
tb.addLinks('Home', '#');
tb.addLinks('Cars', '#');
tb.addLinks('Drones', '#');
tb.addLinks('Map', '#');
tb.appendToElement($('body'));


