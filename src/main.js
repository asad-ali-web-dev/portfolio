(() => {
    const menu_links = document.querySelector("#navbar-menu-links");
    const menu_btn = document.querySelector("#navbar-menu-btn");
    const menu_btn_text = document.querySelector("#navbar-menu-btn > span");
    
    menu_links.style.display = "none";
    menu_btn.addEventListener("click", () => {
        menu_btn.classList.toggle("translate-x-0");
        menu_btn.classList.toggle("mr-5");
        menu_btn.classList.toggle("-translate-x-96");
        menu_links.classList.toggle("md:translate-x-96");
        if (menu_btn_text.innerText === "MENU") {
            menu_btn_text.innerText = "CLOSE";
            setTimeout(() => {
                menu_links.style.display = "flex";
            }, 400);
        } else if (menu_btn_text.innerText === "CLOSE") {
            menu_btn_text.innerText = "MENU";
            setTimeout(() => {
                menu_links.style.display = "none";
            }, 400);
        }
    });
})();