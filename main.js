const move_btn = {
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