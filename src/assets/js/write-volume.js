'use strict'

import React from "react";
import ReactDOM  from "react-dom";

import "../css/info.css"

import Info from "./components/Info.js";

let page = document.body.querySelector("#page");
let infoBody = document.body.querySelector("#info");
let firstTime = true;

infoBody.onclick = (e)=> {
    let div = document.createElement("DIV");
    page.append(div);

    ReactDOM.render( <Info/>, div );
    firstTime = false;

    infoBody.onclick = null;
};

page.addEventListener("click", closeInfo);

function closeInfo(e) {
    let target = e.target;

    if ( target.classList.contains("exit") ) {
        let info = document.body.querySelector("#info-page");
        info.style.display = "none";
    }
    if ( target.id === "info" && !firstTime ) {
        let info = document.body.querySelector("#info-page");
        info.style.display = "";
    }
    else return;
}