// Données des chansons (10 max - exemple avec 3)
const songs = [
    {
        title: "Le temps s'évade à St-Romain",
        duration: "2:54",
        file: "assets/music/max-sunshine-le-temps-sevade-a-st-romain.mp3",
        lyrics: "Paroles de la chanson 1...\nDeuxième ligne..."
    },
    {
        title: "Gars de bois",
        duration: "3:50",
        file: "assets/music/max-sunshine-gars-de-bois.mp3",
        lyrics: "Paroles de la chanson 2...\nEncore plus de paroles..."
    },
    {
        title: "À la vie, à la mo...",
        duration: "2:38",
        file: "assets/music/max-sunshine-a-la-vie-a-la-mo.mp3",
        lyrics: "Paroles de la chanson 3..."
    },
    {
        title: "Light it up",
        duration: "4:59",
        file: "assets/music/max-sunshine-light-it-up.mp3",
        lyrics: "Paroles de la chanson 4..."
    },
    {
        title: "Ain't got clocks",
        duration: "3:20",
        file: "assets/music/max-sunshine-aint-got-clocks.mp3",
        lyrics: "Paroles de la chanson 5..."
    },
    {
        title: "Built to last",
        duration: "3:38",
        file: "assets/music/max-sunshine-built-to-last.mp3",
        lyrics: "Paroles de la chanson 6..."
    },
    {
        title: "Pa' siempre",
        duration: "2:25",
        file: "assets/music/max-sunshine-pa-siempre.mp3",
        lyrics: "Paroles de la chanson 7..."
    },
    {
        title: "Le temps s'évade à St-Romain - Acoustique",
        duration: "2:38",
        file: "assets/music/max-sunshine-le-temps-sevade-a-st-romain-acoustique.mp3",
        lyrics: "Paroles de la chanson 3..."
    },
    {
        title: "We don't check the time",
        duration: "4:10",
        file: "assets/music/max-sunshine-we-dont-check-the-time.mp3",
        lyrics: "Paroles de la chanson 8..."
    }
];

const tracklistEl = document.getElementById('tracklist');
const audioPlayer = document.getElementById('audioPlayer');
const lyricsPopup = document.getElementById('lyricsPopup');
const lyricsText = document.getElementById('lyricsText');
const closeLyrics = document.getElementById('closeLyrics');

let currentTrackEl = null;

songs.forEach((song, index) => {
    const trackEl = document.createElement('div');
    trackEl.classList.add('track');

    trackEl.innerHTML = `
        <div class="track-info">
            <div class="track-title">${song.title}</div>
            <div class="track-duration">${song.duration}</div>
        </div>
        <div class="track-actions">
            <i class="fa-solid fa-play" title="Jouer"></i>
            <a href="${song.file}" download><i class="fa-solid fa-download" title="Télécharger"></i></a>
            <i class="fa-solid fa-file-lines hide" title="Paroles"></i>
        </div>
    `;

    const playBtn = trackEl.querySelector('.fa-play');

    playBtn.addEventListener('click', () => {
        // Si on clique sur la même chanson en lecture -> pause
        if (currentTrackEl === trackEl && !audioPlayer.paused) {
            audioPlayer.pause();
            playBtn.classList.replace('fa-pause', 'fa-play');
            return;
        }

        // Stopper la chanson en cours
        if (currentTrackEl) {
            currentTrackEl.classList.remove('active');
            currentTrackEl.querySelector('.fa-pause')?.classList.replace('fa-pause', 'fa-play');
        }

        // Mettre à jour le lecteur
        audioPlayer.src = song.file;
        audioPlayer.play();

        // Mettre à jour l'UI
        trackEl.classList.add('active');
        playBtn.classList.replace('fa-play', 'fa-pause');
        currentTrackEl = trackEl;
    });

    // Paroles
    trackEl.querySelector('.fa-file-lines').addEventListener('click', () => {
        lyricsText.textContent = song.lyrics;
        lyricsPopup.style.display = 'flex';
    });

    tracklistEl.appendChild(trackEl);
});

// Fermer popup
closeLyrics.addEventListener('click', () => {
    lyricsPopup.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === lyricsPopup) {
        lyricsPopup.style.display = 'none';
    }
});

// Quand la chanson se termine
audioPlayer.addEventListener('ended', () => {
    if (currentTrackEl) {
        currentTrackEl.classList.remove('active');
        currentTrackEl.querySelector('.fa-pause')?.classList.replace('fa-pause', 'fa-play');
        currentTrackEl = null;
    }
});
