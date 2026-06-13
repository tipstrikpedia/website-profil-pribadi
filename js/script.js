const form = document.querySelector('form');
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
        statusPesan.innerText = 'message cannot be empty.';
        statusPesan.style.color = 'red';
        return;
    }

    statusPesan.innerText = "Thank you " + inputNama.value + ", your message has been received";
    statusPesan.style.color = 'green';

    form.reset();

    setTimeout(function () {
        statusPesan.innerText = '';
    }, 3000);
});

const darkModeBtn = document.querySelector('#darkModeBtn');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeBtn.innerText = 'Light Mode';
}

darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.innerText = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeBtn.innerText = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

const backToTopBtn = document.querySelector("#backToTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});