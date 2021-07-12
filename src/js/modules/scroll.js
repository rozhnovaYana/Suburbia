function scroll(selector) {
    const linkElement = document.querySelectorAll(`[href='${selector}']`);
    linkElement.forEach(item => {
        const id = (item.getAttribute("href")),
            hiddenElement = document.querySelector(`${id}`);
        item.addEventListener('click', (e) => {
            e.preventDefault();
            hiddenElement.scrollIntoView({behavior: "smooth" });
        });
    });
}
export default scroll;