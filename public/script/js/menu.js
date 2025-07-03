"use strict";
document.querySelectorAll(".menu").forEach((btn) => {
    btn.addEventListener("click", () => {
        const sideBar = document.getElementById("sideBar");
        if (!sideBar)
            return;
        const isOpen = sideBar.style.display !== "none";
        if (isOpen) {
            sideBar.style.width = "0px";
            sideBar.style.display = "none";
        }
        else {
            sideBar.style.width = "320px";
            sideBar.style.display = "flex";
        }
    });
});
