import framework from "../../framework/framework.js"

import ShowStartAnimation from "../common/animation/show_start.js"
import UIStart from "../common/ui/start.js"

import ShowContentAnimation from "../common/animation/show_content.js"
import UIContentContainer from "../common/ui/content_container.js";

import ShowHeaderMenu from "../common/animation/show_header_menu.js";
import UIHeaderMenu from "../common/ui/header_menu.js"

import ShowBasicInfoAnimation from "../basic_info/animation/show_basic_info.js";
import UIBasicInfo from "../basic_info/ui/basic_info.js"



framework.UIElement('body')    
.setStyle({

    margin : "0",

    backgroundColor : "rgb(34, 34, 33)",

    transition : "0.0s"

})
.setInner(

    UIStart(),

    UIHeaderMenu(),

    UIContentContainer()

)



await ShowStartAnimation().play();

await ShowContentAnimation().play();

await ShowHeaderMenu().play();



$("#content-container")
.setInner(

    UIBasicInfo()

);

await ShowBasicInfoAnimation().play();



setInterval(function () {

    $("#start")
    .setStyle({
    
        transition : "0.0s"
    
    })
    
    $("#content-container")
    .setStyle({
    
        transition : "0.0s"
    
    })

}, 1000);