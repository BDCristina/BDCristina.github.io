// Inițializați harta Leaflet
var mymap = L.map('map').setView([46.7712, 23.5292], 13); // Coordonatele pentru Florești și nivelul de zoom

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Adăugați o marcă pe hartă la locația specificată
L.marker([46.7712, 23.5292]).addTo(mymap).bindPopup("<b>Florești, Cluj County</b>").openPopup();
