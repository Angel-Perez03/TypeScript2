"use strict";
const series = [
    { id: 1, name: "Breaking Bad", channel: "AMC", seasons: 5, description: "Historia de Walter White", website: "https://www.amc.com/shows/breaking-bad", imageUrl: "https://i.imgur.com/GGje0vc.jpg" },
    { id: 2, name: "Orange Is the New Black", channel: "Netflix", seasons: 6, description: "Historia de Piper Chapman", website: "https://www.netflix.com/co/title/70242311", imageUrl: "https://i.imgur.com/EVKe48G.jpg" },
    { id: 3, name: "Game of Thrones", channel: "HBO", seasons: 7, description: "American fantasy drama", website: "https://www.hbo.com/game-of-thrones", imageUrl: "https://i.imgur.com/TDCEV1S.jpg" },
    { id: 4, name: "The Big Bang Theory", channel: "CBS", seasons: 12, description: "Historia de Leonard y Sheldon", website: "https://www.cbs.com/shows/big_bang_theory/about/", imageUrl: "https://i.imgur.com/uAEpVWk.jpg" }
];
// Calcular el promedio de temporadas
const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
const averageSeasons = (totalSeasons / series.length).toFixed(2);
document.getElementById('promedio').innerText = averageSeasons;
// Generar las filas de la tabla
const serieBody = document.getElementById('serie-body');
series.forEach(serie => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    row.addEventListener('click', () => mostrarDetalle(serie));
    serieBody.appendChild(row);
});
function mostrarDetalle(serie) {
    const detailImage = document.getElementById('detail-image');
    const detailName = document.getElementById('detail-name');
    const detailDescription = document.getElementById('detail-description');
    const detailLink = document.getElementById('detail-link');
    detailImage.src = serie.imageUrl;
    detailName.innerText = serie.name;
    detailDescription.innerText = serie.description;
    detailLink.href = serie.website;
    document.getElementById('serie-detail').style.display = 'block';
}
