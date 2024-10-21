interface Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    website: string;
    imageUrl: string;
}

const series: Serie[] = [
    { id: 1, name: "Breaking Bad", channel: "AMC", seasons: 5, description: "Historia de Walter White", website: "https://www.amc.com/shows/breaking-bad", imageUrl: "https://illuminatilab.com/blog/wp-content/uploads/2013/10/Breaking-Bad.jpg" },
    { id: 2, name: "Orange Is the New Black", channel: "Netflix", seasons: 6, description: "Historia de Piper Chapman", website: "https://www.netflix.com/co/title/70242311", imageUrl: "https://pics.filmaffinity.com/Orange_Is_the_New_Black_Serie_de_TV-968511881-large.jpg" },
    { id: 3, name: "Game of Thrones", channel: "HBO", seasons: 7, description: "American fantasy drama", website: "https://www.hbo.com/game-of-thrones", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPXXE9mIm9-AHo0fI9g7iqzwL_rSrvoclhg&s" },
    { id: 4, name: "The Big Bang Theory", channel: "CBS", seasons: 12, description: "Historia de Leonard y Sheldon", website: "https://www.cbs.com/shows/big_bang_theory/about/", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuX_01R6QUqqhYYE6nelfGBEdNttqR45381g&s" }
];

// Calcular el promedio de temporadas
const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
const averageSeasons = (totalSeasons / series.length).toFixed(2);
document.getElementById('promedio')!.innerText = averageSeasons;

const serieBody = document.getElementById('serie-body')!;
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

function mostrarDetalle(serie: Serie) {
    const detailImage = document.getElementById('detail-image') as HTMLImageElement;
    const detailName = document.getElementById('detail-name') as HTMLElement;
    const detailDescription = document.getElementById('detail-description') as HTMLElement;
    const detailLink = document.getElementById('detail-link') as HTMLAnchorElement;
    
    detailImage.src = serie.imageUrl;
    detailName.innerText = serie.name;
    detailDescription.innerText = serie.description;
    detailLink.href = serie.website;

    document.getElementById('serie-detail')!.style.display = 'block';
}
