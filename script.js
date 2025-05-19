
const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankyou');

form.addEventListener('submit', function () {
    setTimeout(() => {
        thankYou.style.display = 'block';
        form.reset();


        setTimeout(() => {
            thankYou.style.display = 'none';
        }, 3000);

    }, 1000);
});

thankYou.addEventListener('click', function () {
    thankYou.style.display = 'none';
});

const showForm = document.getElementById('showForm');
const formContainer = document.querySelector('.contact');
const contactSection = document.getElementById('contactSection');

showForm.addEventListener('click', function (e) {
    e.preventDefault();
    contactSection.classList.add('visible');
});




document.addEventListener('click', function (e) {
    const isClickInside = contactSection.contains(e.target) || showForm.contains(e.target);
    if (!isClickInside) {
        contactSection.classList.remove('visible');
    }
});

