const accordians = document.querySelectorAll(".accordian");

accordians.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("is-open");
        let content = element.nextElementSibling;
        let height = content.style.maxHeight;

        height ? height = null : height = content.scrollHeight + "px";

        content.style.maxHeight = height;
    });
});

addEventListener("resize", () => {
    accordians.forEach(element => {
        let content = element.nextElementSibling;
        if(content.style.maxHeight) content.style.maxHeight = content.scrollHeight + "px";
    });
});