"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_js_1 = require("./data.js"); // Asegúrate de importar correctamente
const tbody = document.getElementById('series-tbody');
function displaySeries() {
    data_js_1.series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tbody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    displaySeries();
});
