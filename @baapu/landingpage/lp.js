const flexy = document.querySelector(".flexy");
const items = document.querySelectorAll(".item");

document.addEventListener("DOMContentLoaded", function() {
    function addMoreItems() {
        items.forEach(item => {
            const clone = item.cloneNode(true);
            flexy.appendChild(clone);
        });
    }

    window.addEventListener("scroll", function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addMoreItems();
        }
    });

    addMoreItems();
});
