const form = document.querySelector('#contactForm');
const inputNama = document.querySelector('#nama');
const inputEmail = document.querySelector('#email');
const inputPesan = document.querySelector('#pesan');
const statusPesan = document.querySelector('#statusPesan');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputNama.value.trim() === '') {
        statusPesan.innerText = 'Name cannot be empty.';
        statusPesan.style.color = 'red';
        return;
    }

    if (inputEmail.value.trim() === '') {
        statusPesan.innerText = 'Email cannot be empty.';
        statusPesan.style.color = 'red';
        return;
    }

    if (inputPesan.value.trim() === '') {
        statusPesan.innerText = 'Message cannot be empty.';
        statusPesan.style.color = 'red';
        return;
    }

    statusPesan.innerText =
        'Thank you ' + inputNama.value + ', your message has been received.';
    statusPesan.style.color = 'green';

    form.reset();

    setTimeout(function () {
        statusPesan.innerText = '';
    }, 3000);
});

const darkModeBtn = document.querySelector('#darkModeBtn');

function updateThemeButton() {
    const isDarkMode = document.body.classList.contains('dark-mode');

    darkModeBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    darkModeBtn.setAttribute('aria-pressed', isDarkMode.toString());
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

updateThemeButton();

darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    updateThemeButton();
});

const backToTopBtn = document.querySelector('#backToTopBtn');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});