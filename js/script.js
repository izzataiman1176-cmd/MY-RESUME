// IMD318 portfolio interactions: mobile navigation, dark mode and current year.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀' : '◐';
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
if (menuToggle && nav) menuToggle.addEventListener('click', () => nav.classList.toggle('open'));


/* CONTENTS CLICK ANIMATION */

document.querySelectorAll('.contents-list a')
.forEach(link => {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const destination = this.href;

        this.classList.add('zoom-out');

        setTimeout(() => {
            window.location.href = destination;
        }, 300);

    });

});

