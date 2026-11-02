document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    const mapContainer = document.getElementById("map");

    if (!mapContainer) {
        console.warn("Map container #map was not found.");
        return;
    }
   
    const farmLat = -25.878598;
    const farmLng = 28.213448;

    const map = L.map("map").setView(
        [farmLat, farmLng],
        14
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    const farmMarker = L.marker([farmLat, farmLng]).addTo(map);

    farmMarker
        .bindPopup("<b>Sunrise Acres Farm</b><br>Plot 348 JR, Main Road, City of Tshwane, 0183")
        .openPopup();
});




