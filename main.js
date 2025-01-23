import './style.css'

const load = {
    msg: "Game loading...",
    txt: document.querySelector('.loading-txt'),
    id: 0,
    complete: false
}

const loading = () => {
    load.txt.innerHTML += load.msg[load.id]
    load.id++
    if (load.id === load.msg.length) {
        load.id = 0
        load.txt.innerHTML = ""
        setTimeout(loading, 500)
        return;
    }
    if (!load.complete)
        setTimeout(loading, 250)
}

document.getElementById("toggle-banner").addEventListener('click', () => {
    const banner = document.getElementById("game-banner")
    if (banner.style.display === "none")
        banner.style.display = "block"
    else
        banner.style.display = "none"
})