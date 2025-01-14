const game = localStorage.getItem("autosave") ? {
    loaded: false,
    start: Boolean(localStorage.getItem("start")),
    store: JSON.parse(localStorage.getItem("props")),
    backup: localStorage
} : {
    loaded: false,
    autosave: false,
    start: false,
    store: [],
    backup: sessionStorage
}

const update_game = (prop) => {
    game[prop] = !game[prop]
    switch (prop) {
        case "loaded":
            const game_info = document.getElementById("game-info")
            if (game[prop])
                game_info.style.display = "none"
            else
                game_info.style.display = "block"
            break;
        case "autosave":
            if (game[prop]) {
                const copy = sessionStorage
                game.backup = localStorage
                game.backup.setItem("autosave", "autosave_on")
                for (const prop of game.store)
                    game.backup.setItem(prop, copy.getItem(prop))
            }
            else {
                const copy = localStorage
                game.backup = sessionStorage
                for (const prop of game.store)
                    game.backup.setItem(prop, copy.getItem(prop))
                copy.clear()
                copy.setItem("autosave", "")
            }
            break;
        case "start":
            if (game[prop])
                game.backup.setItem("start", "start_complete")
            break;
    }
}

const move = {
    up: document.getElementById("up-btn"),
    down: document.getElementById("dn-btn"),
    left: document.getElementById("lft-btn"),
    right: document.getElementById("rgt-btn")
}

const actions = {
    a: document.getElementById("a-btn"),
    b: document.getElementById("b-btn"),
    c: document.getElementById("c-btn"),
    i: document.getElementById("i-btn")
}

/*  Actions
    1. Confirm / Activate
       - Ask
       - Exchange: give / request
       - Answer
    2. Cancel
    3. Menu
       - Contacts
       - Inventory
       - Guide [language manual]
*/

document.getElementById("toggle-banner").addEventListener('click', () => {
    const banner = document.getElementById("game-banner")
    if (banner.style.display === "none")
        banner.style.display = "block"
    else
        banner.style.display = "none"
})

/*  When player presses button or key:
    - press and hold move button/key: continuous movement
    - press action button/key: toggle

    Press: pointerdown
    Release: pointerup
*/

move.up.addEventListener("pointerdown", () => {})
move.up.addEventListener("pointerup", () => {})

move.down.addEventListener("pointerdown", () => {})
move.down.addEventListener("pointerup", () => {})

move.left.addEventListener("pointerdown", () => {})
move.left.addEventListener("pointerup", () => {})

move.right.addEventListener("pointerdown", () => {})
move.right.addEventListener("pointerup", () => {})

actions.a.addEventListener("pointerdown", () => {})
actions.a.addEventListener("pointerup", () => {})

actions.b.addEventListener("pointerdown", () => {})
actions.b.addEventListener("pointerup", () => {})

actions.c.addEventListener("pointerdown", () => {})
actions.c.addEventListener("pointerup", () => {})

actions.i.addEventListener("pointerdown", () => {})
actions.i.addEventListener("pointerup", () => {})

update_game("loaded")