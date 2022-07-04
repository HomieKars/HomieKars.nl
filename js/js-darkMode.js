const btn = document.querySelector('.switch-mode-btn');

btn.addEventListener('click', () => {
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
        localStorage.setItem("data-theme", "light");
        document.documentElement.classList.remove('dark-theme');
        document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-sun-bright'></i>"
    } else if (theme === null || theme === "light") {
        localStorage.setItem("data-theme", "dark");
        document.documentElement.classList.toggle('dark-theme');
        document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-moon'></i>"
    }
});

$(document).ready(function () {
    let theme = localStorage.getItem("data-theme");
    if (theme === "dark") {
        document.documentElement.classList.toggle('dark-theme');
        document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-moon'></i>"
    } else if (theme === null || theme === "light") {
        document.documentElement.classList.remove('dark-theme');
        document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-sun-bright'></i>"
    }
});

document.addEventListener("keydown", function (zEvent) {
    let theme = localStorage.getItem("data-theme");
    if (zEvent.shiftKey && zEvent.key === "T") {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            if (theme === "dark") {
            } else {
                localStorage.setItem("data-theme", "dark");
                document.documentElement.classList.toggle('dark-theme');
                document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-moon'></i>"
            }
        } else if (!darkThemeMq.matches) {
            if (theme === "light") {
            } else {
                localStorage.setItem("data-theme", "light");
                document.documentElement.classList.remove('dark-theme');
                document.getElementById("switch-mode-btn").innerHTML = "<i class='fa-solid fa-sun-bright'></i>"
            }
        }
    }
});