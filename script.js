/* script.js - Core Functional Script */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Toggle --- */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }

    /* --- 2. Navbar Shadow on Scroll --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- 3. Scroll Reveal Animations --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial trigger

    /* --- 4. Category Filtering (Explore Page) --- */
    const filterPills = document.querySelectorAll('.filter-pill');
    const exploreItems = document.querySelectorAll('#exploreGrid .item-card');

    if (filterPills.length > 0 && exploreItems.length > 0) {
        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(btn => btn.classList.remove('active'));
                pill.classList.add('active');

                const selectedCategory = pill.getAttribute('data-category').toLowerCase();

                exploreItems.forEach(item => {
                    const itemCategories = item.getAttribute('data-category').toLowerCase();
                    if (selectedCategory === 'all' || itemCategories.includes(selectedCategory)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    /* --- 5. Live Search Input Filter --- */
    const searchInput = document.getElementById('searchInput');

    if (searchInput && exploreItems.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();

            exploreItems.forEach(item => {
                const title = item.querySelector('.card-title').textContent.toLowerCase();
                const desc = item.querySelector('.card-desc').textContent.toLowerCase();

                if (title.includes(query) || desc.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    /* --- 6. Back To Top Button --- */
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
