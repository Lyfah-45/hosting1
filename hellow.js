document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("dynamic-header");
    const texts = ["Welcome to My Website", "Hello, I'm LYFAH", "Web Developer & Designer"];
    let index = 0;

    function changeHeader() {
        header.textContent = texts[index];
        index = (index + 1) % texts.length;
    }

    setInterval(changeHeader, 3000); // Change text every 3 seconds
});