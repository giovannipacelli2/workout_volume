'use strict'

import React from "react";
import ReactDOM  from "react-dom";

import "../css/info.css"

import Vol from "./components/Vol.js";
import Info from "./components/Info";

let page = document.body.querySelector("#page");

let volBody = document.body.querySelector("#vol");
let infoBody = document.body.querySelector("#info");

let firstTimeV = true;
let firstTimeI = true;

volBody.onclick = (e)=> {
    let div = document.createElement("DIV");
    page.append(div);

    ReactDOM.render( <Vol/>, div );
    firstTimeV = false;

    volBody.onclick = null;
};

infoBody.onclick = (e)=> {
    let div = document.createElement("DIV");
    page.append(div);

    ReactDOM.render( <Info/>, div );
    firstTimeI = false;

    infoBody.onclick = null;
};

page.addEventListener("click", closeInfo);

function closeInfo(e) {
    let target = e.target;

    if ( target.id === "exit-page-vol" ) {
        let vol = document.body.querySelector("#vol-page");
        vol.style.display = "none";
    }
    if ( target.id === "vol" && !firstTimeV ) {
        let vol = document.body.querySelector("#vol-page");
        vol.style.display = "";
    }

    if ( target.id === "exit-page-info" ) {
        let info = document.body.querySelector("#info-page");
        info.style.display = "none";
    }
    if ( target.id === "info" && !firstTimeI ) {
        let info = document.body.querySelector("#info-page");
        info.style.display = "";
    }

    else return;
}