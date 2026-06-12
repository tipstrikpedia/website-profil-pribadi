const form = document.querySelector('form');
const inputNama = document.querySelector('#nama');
const inputEmail = document.querySelector('#email');
const inputPesan = document.querySelector('#pesan');
const statusPesan = document.querySelector('#statusPesan');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (inputNama.value.trim() === '') {
        statusPesan.innerText = 'Nama tidak boleh kosong.';
        statusPesan.style.color = 'red';

        return;
    }
    if (inputEmail.value.trim() === '') {
        statusPesan.innerText = 'Email tidak boleh kosong.';
        statusPesan.style.color = 'red';
        return;
    }
    if (inputPesan.value.trim() === '') {
        statusPesan.innerText = 'Pesan tidak boleh kosong.';
        statusPesan.style.color = 'red';
        return;
    }

    statusPesan.innerText = " Terima kasih " + inputNama.value + ", Pesan kamu sudah diterima";
    statusPesan.style.color = 'green';

    form.reset();

    setTimeout(function () {
        statusPesan.innerText = '';
    }, 3000);
});

const darkModeBtn = document.querySelector('#darkModeBtn');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeBtn.innerText = 'Mode Terang';
}

darkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.innerText = 'Mode Terang';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeBtn.innerText = 'Mode Gelap';
        localStorage.setItem('theme', 'light');
    }
});