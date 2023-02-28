'use strict'

import React from "react";

import {volume} from "../../module/volume.js";

function WriteVolume() {

    let rows = [];

    for ( let row in volume.repsPercent ) {

        let percent = volume.repsPercent[row];

        let html = (
            <tr>
                <td>{row}</td>
                <td>{percent}</td>
            </tr>
        );

        rows.push(html);
    }

    return rows;
}

export default function Vol() {
    return (
        <div id="vol-page" className="window-page">
            <div id="vol-container" className="window-container">
                <div className="close close-window" id ="exit-page-vol">x</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Reps</th>
                            <th>Volume %</th>
                        </tr>
                    </thead>
                    <tbody id="info-body">
                        <WriteVolume/>
                    </tbody>
                </table>
            </div>

        </div>
    );
}