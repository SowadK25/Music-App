window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const tiles = document.querySelectorAll(".tiles div");
    const visual = document.querySelector(".visual");
    const musicNotes = [
        "notes/Green-note.png",
        "notes/Blue-note.png",
        "notes/Purple-note.png",
        "notes/Yellow-note.png",
        "notes/Pink-note.png",
        "notes/Orange-note.png",
        "notes/Red-note.png",
        "notes/Aqua-note.png"
    ]

    tiles.forEach((tile, index) => {
        tile.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            addVisuals(index);
            tile.classList.remove("bounce");
            void tile.offsetWidth;
            tile.classList.add("bounce");
        });
    });

    const addVisuals = index => {
        const note = document.createElement("IMG");
        note.setAttribute("src", musicNotes[index]);
        note.setAttribute("height", "100");
        note.setAttribute("width", "100");
        visual.appendChild(note);
        note.style.animation = "float 2.5s ease-in-out";
        note.addEventListener("animationend", function() {
            visual.removeChild(this);
        })
    }
});
