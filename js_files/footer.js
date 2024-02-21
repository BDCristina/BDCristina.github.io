fetch('../html_pages/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerContainer').innerHTML = data;
    })
    .catch(error => console.error(error));