'use strict'

import React from "react";
import * as ReactDOM  from "react-dom/client";

import "../css/info.css"

import Vol from "./components/Vol.js";
import Info from "./components/Info";

let page = document.body.querySelector("#page");

let volBody = document.body.querySelector("#vol");
let infoBody = document.body.querySelector("#info");

let div = document.createElement("DIV");
page.append(div);

let root = null;

volBody.onclick = (e)=> {
    root = ReactDOM.createRoot(div);

    root.render( <Vol/> );
};

infoBody.onclick = (e)=> {
    root = ReactDOM.createRoot(div);

    root.render( <Info/> );
};

page.addEventListener("click", closeInfo);

function closeInfo(e) {
    let target = e.target;

    if ( target.id === "exit-page-vol" ) {
        root.unmount( <Vol/> );
    }

    if ( target.id === "exit-page-info" ) {
        root.unmount( <Info/> );
    }

    else return;
}