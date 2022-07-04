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