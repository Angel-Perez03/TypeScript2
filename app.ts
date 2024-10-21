import { series } from './data';

console.log(series); // Debería mostrar las series en la consola

const tbody = document.getElementById('series-tbody') as HTMLTableSectionElement;

function displaySeries(): void {
    series.forEach((serie) => {
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
