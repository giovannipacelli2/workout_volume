'use strict'

import {volume} from "../module/volume.js";

let infoBody = document.body.querySelector("#info-body");

function writeVolume() {
    for ( let row in volume.repsPercent ) {

        let html = `
            <tr>
                <td>${row}</td>
                <td>${volume.repsPercent[row]}</td>
            </tr>
        `;

        infoBody.insertAdjacentHTML('beforeend', html);
    }
}

writeVolume();