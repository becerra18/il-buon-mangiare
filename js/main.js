(function() {
    "use strict";
    document.addEventListener('DOMContentLoaded', function(){

        var map = L.map('mapa').setView([18.147432, -94.433246], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([18.147432, -94.433246]).addTo(map)
            .bindPopup('¡VISITANOS!')
            .openPopup();

        //Alerta "abierto o cerrado"
        var hamburgesas = document.getElementById('hamburgesas');

        menu.addEventListener('click', mostrarHamburgesas);
        var menuElegido = [];
        function mostrarHamburgesas(){
            if(hamburgesas >=1){
                menuElegido.push('hamburguesas');
            }
            for(var i = 0; i < menuElegido.length; i++) {
                document.getElementById(menuElegido[i]).style.display = 'block';
            }
        }

    }); //DOM CONTENT LOADED
})();
