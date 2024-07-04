// script.js
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    
    if (nameParam) {
        document.getElementById('welcome-message').textContent = Hi ${nameParam}, Welcome To Website;
    }
    
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById('message').value;
        const currentTime = new Date().toLocaleString();

        const output = `
            <p>Current Time: ${currentTime}</p>
            <p>Nama: ${name}</p>
            <p>No Telepon: ${phone}</p>
            <p>Email: ${email}</p>
            <p>Jenis Kelamin: ${gender}</p>
            <p>Pesan: ${message}</p>
        `;

        document.getElementById('formOutput').innerHTML = output;
    });
});