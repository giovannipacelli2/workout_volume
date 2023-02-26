'use strict'

import React from "react";
import ReactDOM  from "react-dom";

import "../css/info.css"

import Info from "./components/Info.js";

let page = document.body.querySelector("#page");
let infoBody = document.body.querySelector("#info");

infoBody.onclick = (e)=> {
    let div = document.createElement("DIV");
    page.append(div);

    ReactDOM.render( <Info/>, div );
};