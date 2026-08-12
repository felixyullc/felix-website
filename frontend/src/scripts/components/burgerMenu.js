const initBurgerMenu = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav-menu');
    const closeMenu = document.querySelector('.close-menu');

    if (burger && menu && closeMenu) {
        burger.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('active');
            burger.classList.toggle('active');
            burger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('active');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', false);
            document.body.style.overflow = '';
        });

        menu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                menu.classList.remove('active');
                burger.classList.remove('active');
                burger.setAttribute('aria-expanded', false);
                document.body.style.overflow = '';
            }
        });
    }
};

export {initBurgerMenu}