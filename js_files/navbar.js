//functionality for loading the content of a navigation menu (navbar) from an external HTML file and displaying it in a specific container on the page.
fetch('../html_pages/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbarContainer').innerHTML = data;
    })
    .catch(error => console.error(error));
    
document.querySelector('.burger-icon').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('menu-open');
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.navigation').classList.remove('menu-open');
    }
});

function toggleMenu() {
    var modal = document.getElementById("modalContainer");
    modal.style.display === "block" ? modal.style.display = "none" : modal.style.display = "block";
}

window.onclick = function(event) {
    var modal = document.getElementById("modalContainer");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const navigation = document.querySelector('.navigation');

    burgerIcon.addEventListener('click', function() {
        // Toggle class 'menu-open' pe meniu pentru a-l afișa sau ascunde
        navigation.classList.toggle('menu-open');
    });
});
    