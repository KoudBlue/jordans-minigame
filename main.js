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
            if (game[prop])
                document.getElementById("game-info").style.display = "none"
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

update_game("loaded")