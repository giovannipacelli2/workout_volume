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

    let maximal = findMaximal( +form.reps.value, +form.weight.value );
    let vol = volume.getVolume(+form.repsToDo.value);

    let finalWeight = maximal * vol;

    insertTable( table, form.exercise.value, finalWeight.toFixed(1) );


    return false;

};

function findMaximal( reps, weight) {
    let minMaximal = weight/(1.0278-(0.0278*reps));
    let maxMaximal = weight*(1+(0.033*reps));

    return (minMaximal + maxMaximal)/2;
}



function insertTable( table, name, weight ) {

    let html = `<tr><td>${name}</td><td>${weight} kg</td>`;

    table.querySelector("#body").insertAdjacentHTML('beforeend', html);

}