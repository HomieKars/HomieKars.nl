document.addEventListener("keydown", function (zEvent) {
    const modal = document.getElementById("commandPalette");
    if (zEvent.shiftKey && zEvent.key === "K") {
        if(modal.classList.contains("show") === true) {
        } else {
            $("#commandPalette").modal();
        }
    }
});

const btn_c = document.querySelector('.command-palette-btn');

btn_c.addEventListener('click', () => {
    $("#commandPalette").modal();
});