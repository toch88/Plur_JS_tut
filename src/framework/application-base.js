import {TitleBar} from '../ui/title-bar.js'

export class ApplicationBase{
    constructor(title){
        this.title=title;
        this.titleBar=new TitleBar(this.title);
        this.routeMap={}; //key=>value;
        this.defaultRoute=null;
    }

    activateRoute(route){
            let content = this.titleBar.element.find('.page-content');
            
           content.empty();
            
            this.routeMap[route].appendToElement(content);
    }

    show(element){
        this.titleBar.appendToElement(element);
        if(this.defaultRoute){
            this.activateRoute(this.defaultRoute);   
        }
    } 
    
    addRoute(id, pageObj, defaultRoute=false){

       // console.log(`${id} ${pageObj} ${defaultRoute}`);
        this.titleBar.addLinks(id,'');

        this.routeMap[id]=pageObj;
        //console.log(this.routeMap);

        if(defaultRoute){
            this.defaultRoute=id;
        }

    }
}