
export default function UIElement(tag){

    let result;

    if(tag == "body"){

        result = $('body');

    }
    else {
        

        result = document.createElement(tag);

    }

    result.setClass = function(name){

        result.classList.add(...name.split(' '));

        return result;
    }

    result.setId = function(id){

        result.id = id;

        return result;
    }

    result.setStyle = function(styleConfig){

        for(let configName in styleConfig){

            result.style[configName] = styleConfig[configName];

        } 

        return result;
    };

    result.on = function(name, callback){

        result.addEventListener(name, callback);

        return result;
    };

    result.exe = function(callback){

        callback.bind(result)();

        return result;
    };

    const defaultSetAttribute = HTMLElement.prototype.setAttribute;
    result.setAttribute = function(name, value){

        defaultSetAttribute.bind(result)(name, value);

        return result;
    }

    result.appendInner = function(...childs){
        
        for(let childName in childs){

            let child = childs[childName];

            try {

                result.appendChild(child);

            }
            catch
            {

                try{

                    result.innerHTML += child;

                }
                catch{



                }

            }

        }

        return result;
    }

    result.setInner = function(...childs){

        return result.setInnerArray(childs);
    }

    result.setInnerArray = function(childsArray){

        result.innerHTML = "";
        
        for(let childName in childsArray){

            let child = childsArray[childName];

            try {

                result.appendChild(child);

            }
            catch
            {

                try{

                    result.innerHTML += child;

                }
                catch{



                }

            }

        }

        return result;
    }

    return result;

}