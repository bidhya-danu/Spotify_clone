document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.floating-buttons button[onclick="promptAddArtist()"]').addEventListener('click', promptAddArtist);
    document.querySelector('.floating-buttons button[onclick="promptAddAlbum()"]').addEventListener('click', promptAddAlbum);
});

function promptAddArtist() {
    const artistName = prompt("Enter artist name:");
    const artistImage = prompt("Enter artist image URL:");

    if (artistName && artistImage) {
        const artistContainer = document.querySelector('.artists');
        const newArtist = document.createElement('div');
        newArtist.classList.add('artist');

        newArtist.innerHTML = `
            <img src="${artistImage}" alt="${artistName}">
            <p>${artistName}</p>
            <button class="remove-btn" onclick="removeElement(this)">Remove</button>
        `;

        artistContainer.appendChild(newArtist);
    }
}

function promptAddAlbum() {
    const albumName = prompt("Enter album name:");
    const albumImage = prompt("Enter album image URL:");

    if (albumName && albumImage) {
        const albumContainer = document.querySelector('.albums');
        const newAlbum = document.createElement('div');
        newAlbum.classList.add('album');

        newAlbum.innerHTML = `
            <img src="${albumImage}" alt="${albumName}">
            <p>${albumName}</p>
            <button class="remove-btn" onclick="removeElement(this)">Remove</button>
        `;

        albumContainer.appendChild(newAlbum);
    }
}

function removeElement(element) {
    element.parentElement.remove();
}

function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    searchArtists(query);
    searchAlbums(query);
}

function searchArtists(query) {
    const artists = document.querySelectorAll('.artist');
    artists.forEach(artist => {
        const name = artist.querySelector('p').textContent.toLowerCase();
        if (name.includes(query)) {
            artist.style.display = 'block';
        } else {
            artist.style.display = 'none';
        }
    });
}

function searchAlbums(query) {
    const albums = document.querySelectorAll('.album');
    albums.forEach(album => {
        const name = album.querySelector('p').textContent.toLowerCase();
        if (name.includes(query)) {
            album.style.display = 'block';
        } else {
            album.style.display = 'none';
        }
    });
}
