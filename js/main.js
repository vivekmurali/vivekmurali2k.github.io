new WOW().init();

document.getElementById('year').innerHTML = new Date().getFullYear();

document.getElementById('more-arrows').addEventListener('click', () => document.getElementById('about').scrollIntoView());

