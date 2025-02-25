document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'); // Hamburger knop
    const closeMenu = document.querySelector('.close-menu'); // Kruisje
    const menu = document.getElementById('menu'); // Menu
    const body = document.body; // Body element

    // Open menu
    hamburger.addEventListener('click', () => {
        menu.hidden = false; // Verwijdert de `hidden` attribuut, dus menu wordt zichtbaar
        body.classList.add('menu-open'); // Voorkom scrollen
    });

    // Sluit menu
    closeMenu.addEventListener('click', () => {
        menu.hidden = true; // Voegt `hidden` attribuut toe, dus menu wordt onzichtbaar
        body.classList.remove('menu-open'); // Scrollen weer toestaan
    });
});

// carousel interaction
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const scrollAmount = 245; // Aantal pixels om te scrollen

    // Scroll naar rechts
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Scroll naar links
    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
});
