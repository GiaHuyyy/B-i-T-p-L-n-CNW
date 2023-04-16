function slide() {
    let index = 0;
    let items = document.querySelectorAll(".featured_list-pictures-item");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("active");
    }

    setTimeout(function () {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("active");
        }
    }, 1000);
}
setInterval(slide, 2000);
