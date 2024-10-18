document.addEventListener('DOMContentLoaded', function () {
    const currentUrl = window.location.pathname.split("/").pop(); 
    const links = document.querySelectorAll('.divHeaderopciones a');

    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        }
    });
});