// Données des chansons (10 max - exemple avec 3)
const songs = [
    {
        title: "Le temps s'évade à St-Romain",
        duration: "2:54",
        file: "assets/music/max-sunshine-le-temps-sevade-a-st-romain.mp3",
        lyrics: "Ils ont vu la terre, juste là, à Saint-Romain.\nUn bout de bois, de rien du tout, mais dans le cœur, c’était certain.\nAcheté à Ronald, un voisin coloré,\nToujours prêt à jaser ou à aider!\nChemises de bûcheron, le nom était tout trouvé\nSanto Romano, notre coin de liberté.\n\nOn n’a pas l’heure, on a le temps.\nPas besoin de réseau pour être contents.\nUn feu qui crépite, des amis, des enfants.\nBon matin la vie! Bon matin Jean-Paul, évidemment!\nSanto Romano, c’est l’bonheur en grand.\nUn havre de paix, un petit bout de temps!\n\nOn a creusé le ruisseau, à bras, à coups de fous rires.\nZézette et vélo, et les soirées à s’en dire.\nQu’on faisait crier la truie quand la flamme sortait fort.\nEt que dans l’fond, on était riches, même sans coffre-fort.\n\nPendant qu’on jase et puis qu’on rit,\nVincent répare sa batterie.\nJiPi fait des burgers, y’en reste jamais.\nCharlène est l’ange du ravitaillement,\nElle garde les verres pleins avec dévouement.\nLes smores sur le feu, les filles en 4 roues.\nÀ courir le soleil avant qu’il soit à genoux\n\nOn n’a pas l’heure, on a le temps.\nUne gang de fous, le cœur d’antan.\nOn chante du Rock Voisine, pis la toune de skidou.\nEt Maxime cherche l’ombre… pas la lumière.\nSanto Romano, c’est le paradis qu’on s’est bâti.\nUne cabane au cœur, pis des souvenirs à vie.\n\nLes enfants couraient avec des bâtons magiques\nÀ la chasse aux monstres dans un rêve féérique.\nDes étoiles filantes dans l’ciel de velours.\nEt des souvenirs d’enfance qui brillent pour toujours.\n\nEt maintenant y’a l’chalet,\nune promesse en bois qui bouge pas de là.\nUn effort de groupe, planche après planche.\nChaque clou en dit long sur ce que c’est devenu.\nDes bâtisseurs de mémoires, de rêveurs têtus.\n\nOn n’a pas l’heure, on a le temps.\nDes histoires d’amour en bois et en vent.\nOn revient chaque année, c’est écrit dans nos mains.\nSanto Romano, t’es rendu loin, mais t’es jamais loin\nOn se revoit l’été prochain.\n\nPis si jamais y’a du monde qui passe…\ndites-leur qu’à Santo Romano, on r’fait l’monde… \nune bûche à la fois.\n"
    },
    {
        title: "Gars de bois",
        duration: "3:50",
        file: "assets/music/max-sunshine-gars-de-bois.mp3",
        lyrics: "Le soleil se lève, les yeux encore collés\nOn part le feu, les mains givrées\nLe café coule, noir comme la nuit\nPis les rôties sur la truie, à l'huile de palme, c'est la vie\n\nLes bottes à cap, les gants pas secs\nLes outils pis la scie dans l’fond du pickup\nOn saute su’l 4 roues, on mange de la poussière\nY’a du bois à fendre avant l'heure d'la bière\n\nOn est des gars d'bois\nY’a rien qu’on fait pas\nLa testostérone, la sueur, pis l’odeur\nOn bûche pis on boit, pis on rit comme des rois\nMais dans l’fond, on est des gars de cœur\n\nOn coupe des troncs, on voit r'voler les branches\nOn pile su’un clou, on se pète une phalange\nOn sue, on crie, et pis on s’épuise\nMais on recule pas, même si l’dos nous brise\n\nOn met d’l’huile dans t'chainsaw\nOn crache par terre, on se squeeze un doigt.\nOn désouche à bras, on sacre en riant\nPis on se mouche comme un bûcheron dans l’vent\n\nOn est des gars d'bois\nY’a rien qu’on fait pas\nLa testostérone, la sueur, pis l’odeur\nOn bûche pis on boit, pis on rit comme des rois\nMais dans l’fond, on est des gars de cœur\n\nOn fait les durs, les hommes de fer\nMais le soir, dans l’silence, on pense à nos mères\nOn s’fait p’tit quand le vent se lève\nPis on s’endort collé la tête pleine de rêves\n\nOn est des gars d'bois\nY’a rien qu’on fait pas\nLa testostérone, la sueur, pis l’odeur\nOn bûche pis on boit, pis on rit comme des rois\nMais dans l’fond, on est des gars de cœur\n\nOn est des gars d'bois\nY’a rien qu’on fait pas\nLa testostérone, la sueur, pis l’odeur\nOn bûche pis on boit, pis on rit comme des rois\nMais dans l’fond, on est des gars de cœur\n\nPis demain on r’commence...\n\nOn est des gars d'bois\nY’a rien qu’on fait pas\nLa testostérone, la sueur, pis l’odeur\nOn bûche pis on boit, pis on rit comme des rois\nMais dans l’fond, on est des gars de cœur\n"
    },
    {
        title: "À la vie, à la mo...",
        duration: "2:38",
        file: "assets/music/max-sunshine-a-la-vie-a-la-mo.mp3",
        lyrics: "La date approche, c’est bientôt les vacances.\nOn coupe le trajet.\nOn s’impose un arrêt.\nSans qu’on s’en rende compte, l’excitation se présente.\nC’est notre tradition qui se veut désaltérante.\nLe temps d’une bière, on prépare l’avenir.\nPlusieurs jours à en profiter, à créer des souvenirs.\n\nOn reprend le chemin vers notre destination.\nLes enfants se détachent quand se pointe le pont.\nÇa y est nous y sommes, on y rêvait.\nPour les prochains clairs de lune, l’excitation renaît.\n\nOn débarque, on s’installe, on sourit.\nNotre montre s’arrête, le temps ralentit.\nNos épaules se relâchent, le stress disparaît.\nChaque tâche devient un projet.\nC’est l’effet de la forêt.\n\nLes bûches garnissent le foyer, la flamme s’attise.\nLes chaises s’approchent, débutent les vocalises.\nLe feu grandit, on murmure les couplets.\nL’aisance se présente comme l’influence d’un soufflet.\nChanter à tue-tête chaque refrain\nNous guide paisiblement vers un bonheur certain.\nLes âmes s’éteignent une à une,\nLaissant les veilleurs observer la lune.\nRefaire le monde à grands coups d’idées,\nDe niaiseries, d’anecdotes et de rires saccadés.\nJusqu’à ce qu’on n’en puisse plus… qu’on rejoigne Morphée.\n\nLe soleil se lève, les enfants aussi.\nLe café percole pendant que siffle la truie.\nLa journée débute, les activités s’organisent :\npêche, vélo, bateau, cueillette ou quatre roues.\nPersonne n’est en reste, le plaisir est partout.\n\nLa scie retentit, le bois se fend.\nLa tête se vide et le cœur se remplit.\nLes branches s’entassent, les souvenirs s’amassent.\nOn se baigne et on rit.\nN’est-ce pas ça, la vie ?\n\nChaque jour se termine et on recommence.\nDurant plusieurs clartés, c’est vraiment notre chance.\nIci, l’heure est oubliée, le calendrier un leurre,\nOn compte en fous rires, en battements de cœur.\n\nPas besoin d’être un saint ou même un romain,\nPour apprécier les moments ou tendre la main.\nJe vous écris ces mots pour vous dire merci,\nÀ la vie, Alamo… gravé dans mon esprit."
    },
    {
        title: "We don't check the time",
        duration: "4:10",
        file: "assets/music/max-sunshine-we-dont-check-the-time.mp3",
        lyrics: "They saw that land in Saint-Romain,\nJust some trees and a winding lane.\nBut deep down, they knew it right —\nThat patch of woods felt like pure light.\n\nThey bought it off good ol’ Ron,\nFriendly smile and stories long.\nFlannel shirts, the name just came:\nSanto Romano, wild and untamed.\n\nWe don’t check the time, we let it be,\nNo cell bars, but we feel free.\nFire’s cracklin’, the kids run wild,\nWe greet the day with a country smile.\n\nSanto Romano, where the heart runs deep,\nA place to laugh, a place to keep.\n\nWe dug that creek with busted hands,\nLaughin’ hard, no real plans.\nZezette flew by on two old wheels,\nAnd the fire roared like it could feel.\n\nWe’re broke on paper, but rich inside,\nWith love and stories we never hide.\nVince tunes up that ol’ drum kit,\nJP flips burgers that always hit.\n\nCharleen keeps the glasses filled,\nWith a quiet grace and a steady will.\nThe girls go ridin’ through the trees,\nChasin’ down the summer breeze.\n\nWe don’t check the time, we let it be,\nWe’re a little wild, but we run free.\nWe sing old songs ‘bout snow and sun,\nAnd Max avoids the spotlight, son.\n\nSanto Romano, where we carved our name,\nA cabin built with joy, not fame.\n\nThe kids were playin’ with magic sticks,\nChasin’ dreams and pullin’ tricks.\nUnder velvet skies, we lay back slow,\nCountin’ stars that stole the show.\n\nNow there’s a cabin, strong and wide,\nWith every board nailed in with pride.\nWe built it all, side by side —\nThe kind of place that feels alive.\n\nWe don’t check the time, we let it be,\nLove’s in the grain of every tree.\nWe’ll be back again next July,\nSanto Romano, never goodbye."
    },
    {
        title: "Light it up",
        duration: "4:59",
        file: "assets/music/max-sunshine-light-it-up.mp3",
        lyrics: "Found a spot in Saint-Romain,\nJust some dirt, some trees, some rain.\nBut they saw fire where others passed,\nLit it up and built it fast.\n\nBought it off a man named Ron,\nOld-school soul, still goin’ strong.\nPlaid shirt, big grin, good vibe —\nSanto Romano came alive.\n\nSanto Romano, light it up tonight!\nRaise your glass and feel it right.\nBuilt from sweat, from dirt, from song —\nThis is where we all belong.\nWhoa-oh! Santo Romano!\nWhoa-oh! Never let it go!\n\nNo clocks, no plans, no screens,\nJust flames, friends, and in-between.\nKids run wild, we sip and shout,\nThe sun comes up, we don’t burn out.\n\nVince is bangin’ on that old drum kit,\nJP's flippin’ burgers — never quits.\nCharleen keeps the drinks in flow,\nAnd the night moves fast but we take it slow.\n\nSanto Romano, light it up tonight!\nRaise your glass and feel it right.\nBuilt from sweat, from dirt, from song —\nThis is where we all belong.\nWhoa-oh! Santo Romano!\nWhoa-oh! Never let it go!\n\nZezette’s flying down the hill,\nLaughter echoing loud and real.\nMax hides out in the forest shade,\nWhile we all dance in what we made.\n\nThe kids with sticks are casting spells,\nChasing monsters in the dells.\nStars above like burning gold,\nAnd memories that won't grow old.\n\nNow there’s a cabin, strong and proud,\nRaised with hands, no shortcuts allowed.\nNails like thunder, boards like drums,\nWe built it loud and here it hums.\n\nSanto Romano, light it up tonight!\nRaise your glass and feel it right.\nBuilt from sweat, from dirt, from song —\nThis is where we all belong.\nWhoa-oh! Santo Romano!\nWhoa-oh! Never let it go!\n\nSanto Romano, light it up tonight!\nRaise your glass and feel it right.\nBuilt from sweat, from dirt, from song —\nThis is where we all belong.\nWhoa-oh! Santo Romano!\nWhoa-oh! Never let it go!\n\nWe’ll be back next summer,\nSanto Romano…\nnever let it go.\n"
    },
    {
        title: "Ain't got clocks",
        duration: "3:20",
        file: "assets/music/max-sunshine-aint-got-clocks.mp3",
        lyrics: "They saw that land — just sittin’ in Saint-Romain.\nNothin’ but trees, but they saw gold in the grain.\nBought it from Ronald — dude’s got flair,\nAlways down to talk or lend you a chair.\n\nPlaid shirts, boots laced, name came clean:\nSanto Romano — our freedom scene.\nA slice of the map where time don’t tick,\nWhere the signal’s gone, but the vibe is thick.\n\nWe ain’t got clocks — we got the vibe.\nNo bars, no stress — but man, we thrive.\nFire’s poppin’, kids run wild,\nMorning hits, we greet it with a smile.\n\nYo Jean-Paul! You know what it is —\nSanto Romano, we live this biz.\nA peace retreat with a gangsta twist,\nTime stands still... and nothing's missed.\n\nWe dug that creek, no machine in sight,\nJust hands and laughs deep into the night.\nZézette and bikes, stories in the dark,\nMaking that pig squeal when we lit that spark.\n\nTruth is, we rich with no safe or stash,\nJust memories, jokes, and a whole lotta laughs.\nWhile we spit bars and sip on tea,\nVincent’s fixing up that ol’ battery.\n\nJiPi on grill — burgers never flop,\nCharlène’s the plug — drinks never stop.\nGirls on ATVs, chasing that sun,\nCampfire s’mores, day ain't done.\n\nWe ain’t got clocks — we got the vibe.\nA wild-ass crew with an old-school tribe.\nWe sing old jams, and we ride that sled,\nWhile Max avoids the light, hides his head.\n\nSanto Romano — we built our throne,\nWith a cabin heart and a memory zone.\n\nKids out there with magic sticks,\nFighting monsters in fairytale flicks.\nStars like glitter on a velvet sky,\nMemories stay, they never die.\n\nNow there’s a cabin, a wooden oath,\nA squad-built dream — no backing out, both.\nEach nail's a chapter, each beam a plan,\nWe the memory gang — hammer in hand.\n\nWe ain’t got clocks — we got the soul.\nLove stories carved in wood and cold.\nWe show up yearly, yeah, it’s locked in fate.\nSanto, you far — but you never late.\n\nWe’ll be back next summer, no doubt in that,\nAnd if someone pulls up, you tell ’em flat:\nAt Santo Romano, we rebuild the earth...\nOne log at a time, for what it’s worth.\n"
    },
    {
        title: "Built to last",
        duration: "3:38",
        file: "assets/music/max-sunshine-built-to-last.mp3",
        lyrics: "They found a patch up in Saint-Romain,\nJust some trees, a road, and rain.\nBut in their hearts, they knew the score —\nThat little spot was so much more.\n\nBought it from Ronaldo, chill old guy,\nFlannel shirt and twinkle eye.\nName came fast, it had a glow:\nSanto Romano — let’s go!\n\nWe don't wear watches, we take our time.\nNo signal bars, but we're doin' fine.\nFire’s cracklin’, kids run free,\nMornings shout, \"Hey life! Hey Jean-P!\"\n\nSanto Romano, where we break the mold,\nA peaceful riot, a heart of gold.\n\nWe dug that stream with laughs and shouts,\nNo machines, just hands and wild routes.\nZezette’s ridin’, the stories flow,\nThat fire flared and the pig said “Whoa!”\n\nWe ain't got gold, but man we’re rich,\nWith every song, we flip the switch.\nVincenzo fixing wires and beats,\nHipé's flipping burgers, can’t be beat.\n\nOleene’s got the drinks, no one’s dry,\nThe girls ride hard and chase the sky.\nWe toast the stars, we race the sun,\nThe day ain't over till the music’s done.\n\nWe don't wear watches, we take our time.\nWe’re loud, we’re nuts, and we’re just fine.\nWe sing old tunes, and sled songs too,\nWhile Max avoids the light (that’s nothing new).\n\nSanto Romano, we made it ours —\nA shack, some dreams, and blazing stars.\n\nKids with sticks and magic games,\nHunting monsters with secret names.\nWishes fly through velvet skies,\nChildhood memories never die.\n\nNow there’s a cabin, standing proud,\nBuilt with love, plank by plank, no crowd.\nEvery nail tells part of the tale —\nWe’re stubborn dreamers, we don’t fail.\n\nWe don't wear watches, we take our time.\nOur stories live in wood and pine.\nWe come back every single year,\nSanto Romano — always near.\n\nAnd if some stranger finds this place...\nTell ‘em:\nWe’re building the world…\nOne log at a time.\n"
    },
    {
        title: "Pa' siempre",
        duration: "2:25",
        file: "assets/music/max-sunshine-pa-siempre.mp3",
        lyrics: "Vieron la tierra allá en Saint-Romain,\nUn pedacito que nadie miraba.\nPero en el alma, ya lo sabían,\nAhí la aventura comenzaba.\n\nLo compramos a Ronaldo, un tipo genial,\nSiempre sonriendo, siempre cordial.\nCon camisa de cuadros, el nombre llegó:\nSanto Romano, y el ritmo empezó.\n\nNo hay reloj, pero hay canción,\nNo hay señal, pero hay corazón.\nFuego encendido, risas, amor,\nLa vida saluda con todo su sabor.\n\nSanto Romano, mi rincón especial,\nPaz verdadera, tiempo sin final.\n\nCavamos el río con manos y risas,\nHistorias que el fuego nunca termina.\nZezeta en la bici, los cuentos sin fin,\nY cuando salta la chispa, se escucha el festín.\n\nRicos sin oro, sin caja fuerte,\nLa vida nos premia con buena suerte.\nVincenzo arreglando su batería,\nY Hipé cocina con pura alegría.\n\nOleene sirviendo, no falta jamás,\nLos vasos llenos, la fiesta va más.\nLas chicas volando en el ATV,\nPersiguen el sol antes que se va.\n\nNo hay reloj, pero hay canción,\nUna locura con buena intención.\nCantamos canciones de amor y motor,\nY Max buscando sombra, por favor.\n\nSanto Romano, nuestro paraíso,\nUna cabaña, un eterno hechizo.\n\nLos niños corriendo con palos de magia,\nCazando monstruos en plena nostalgia.\nEstrellas fugaces en cielo de seda,\nRecuerdos de infancia que nadie se lleva.\n\nAhora hay un chalet, promesa de madera,\nQue crece en familia, de forma sincera.\nClavo por clavo, tabla por tabla,\nUn sueño que vive, nunca se acaba.\n\nNo hay reloj, pero hay canción,\nHistorias de viento, madera y pasión.\nVolvemos cada año, está en el alma,\nSanto Romano, siempre en calma.\n\nY si alguien llega, dile sin prisa:\nAquí se construye la vida… una leña a la vez.\n"
    },
    {
        title: "Le temps s'évade à St-Romain - Acoustique",
        duration: "2:38",
        file: "assets/music/max-sunshine-le-temps-sevade-a-st-romain-acoustique.mp3",
        lyrics: "Ils ont vu la terre, juste là, à Saint-Romain.\nUn bout de bois, de rien du tout, mais dans le cœur, c’était certain.\nAcheté à Ronald, un voisin coloré,\nToujours prêt à jaser ou à aider!\nChemises de bûcheron, le nom était tout trouvé\nSanto Romano, notre coin de liberté.\n\nOn n’a pas l’heure, on a le temps.\nPas besoin de réseau pour être contents.\nUn feu qui crépite, des amis, des enfants.\nBon matin la vie! Bon matin Jean-Paul, évidemment!\nSanto Romano, c’est l’bonheur en grand.\nUn havre de paix, un petit bout de temps!\n\nOn a creusé le ruisseau, à bras, à coups de fous rires.\nZézette et vélo, et les soirées à s’en dire.\nQu’on faisait crier la truie quand la flamme sortait fort.\nEt que dans l’fond, on était riches, même sans coffre-fort.\n\nPendant qu’on jase et puis qu’on rit,\nVincent répare sa batterie.\nJiPi fait des burgers, y’en reste jamais.\nCharlène est l’ange du ravitaillement,\nElle garde les verres pleins avec dévouement.\nLes smores sur le feu, les filles en 4 roues.\nÀ courir le soleil avant qu’il soit à genoux\n\nOn n’a pas l’heure, on a le temps.\nUne gang de fous, le cœur d’antan.\nOn chante du Rock Voisine, pis la toune de skidou.\nEt Maxime cherche l’ombre… pas la lumière.\nSanto Romano, c’est le paradis qu’on s’est bâti.\nUne cabane au cœur, pis des souvenirs à vie.\n\nLes enfants couraient avec des bâtons magiques\nÀ la chasse aux monstres dans un rêve féérique.\nDes étoiles filantes dans l’ciel de velours.\nEt des souvenirs d’enfance qui brillent pour toujours.\n\nEt maintenant y’a l’chalet,\nune promesse en bois qui bouge pas de là.\nUn effort de groupe, planche après planche.\nChaque clou en dit long sur ce que c’est devenu.\nDes bâtisseurs de mémoires, de rêveurs têtus.\n\nOn n’a pas l’heure, on a le temps.\nDes histoires d’amour en bois et en vent.\nOn revient chaque année, c’est écrit dans nos mains.\nSanto Romano, t’es rendu loin, mais t’es jamais loin\nOn se revoit l’été prochain.\n\nPis si jamais y’a du monde qui passe…\ndites-leur qu’à Santo Romano, on r’fait l’monde… \nune bûche à la fois.\n"
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
            <i class="fa-solid fa-file-lines" title="Paroles"></i>
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
        // Remplacer les \n par des <br> pour les sauts de ligne HTML
        lyricsText.innerHTML = song.lyrics.replace(/\n/g, '<br>');
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
