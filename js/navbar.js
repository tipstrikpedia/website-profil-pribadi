document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.navbar-toggle');
    const navbar = document.querySelector('.navbar');
    const links = document.querySelector('#nav-links');

    if (!toggle || !navbar || !links) {
        return;
    }

    const mobileQuery = window.matchMedia('(max-width: 600px)');

    function setMenuState(isOpen) {
        navbar.classList.toggle('collapsed', !isOpen);
        toggle.setAttribute('aria-expanded', isOpen.toString());
        links.setAttribute('aria-hidden', (!isOpen).toString());
    }

    function syncMenuWithScreenSize() {
        setMenuState(!mobileQuery.matches);
    }

    syncMenuWithScreenSize();
    mobileQuery.addEventListener('change', syncMenuWithScreenSize);

    toggle.addEventListener('click', function () {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen);
    });

    links.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (mobileQuery.matches) {
                setMenuState(false);
            }
        });
    });

    document.addEventListener('click', function (event) {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';

        if (mobileQuery.matches && isOpen && !navbar.contains(event.target)) {
            setMenuState(false);
        }
    });
});
