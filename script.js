
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const header = document.getElementById('main-header');

// Mobile Menu Toggle
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
        header.classList.remove('bg-beige-light', 'border-transparent');
    } else {
        header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
        header.classList.add('bg-beige-light', 'border-transparent');
    }
});

// FAQ Accordion
function toggleAccordion(element) {
    const item = element.parentElement;
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
    });

    if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
    } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
