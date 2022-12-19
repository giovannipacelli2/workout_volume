'use strict'

let form = document.forms.data;

let firstTime = false;

import {volume} from '../module/volume.js'

form.onsubmit = function (e){

    if ( !firstTime ) {
        const table = "<table id='workout-table'><thead><tr><th>Nome esercizio</th><th>Carico da utilizzare</th></tr></thead><tbody id='body'></tbody></table>";

        form.insertAdjacentHTML('afterend', table);

        firstTime = true;
    }

    const table = document.body.querySelector("#workout-table");

    insertTable( table, form.exercise.value, form.weight.value );


    return false;

};



function insertTable( table, name, weight ) {

    let html = `<tr><td>${name}</td><td>${weight} kg</td>`;

    table.querySelector("#body").insertAdjacentHTML('beforeend', html);

}