document.getElementById('createCloud').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        const cloudLink = `TB-Cloud-Hochgeladen/${username}`;
        document.getElementById('link').href = cloudLink;
        document.getElementById('link').innerText = cloudLink;
        document.getElementById('cloudLink').classList.remove('hidden');
        document.getElementById('uploadSection').classList.remove('hidden');
    } else {
        alert('Bitte geben Sie einen Benutzernamen ein.');
    }
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const uploadedFilesDiv = document.getElementById('uploadedFiles');
        const fileItem = document.createElement('p');
        fileItem.innerHTML = data;
        uploadedFilesDiv.appendChild(fileItem);
    })
    .catch(error => {
        console.error('Fehler beim Hochladen der Datei:', error);
    });
});
