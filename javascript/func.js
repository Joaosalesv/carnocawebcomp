document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const offerForm = document.getElementById('offerForm');
    const searchResults = document.getElementById('searchResults');
 
    // Simulação de dados de caronas disponíveis
    const ridesData = [
        { origin: 'São Paulo', destination: 'Rio de Janeiro', date: '2024-03-10', seatsAvailable: 3 },
        { origin: 'Belo Horizonte', destination: 'Brasília', date: '2024-03-12', seatsAvailable: 2 },
        { origin: 'Curitiba', destination: 'Florianópolis', date: '2024-03-15', seatsAvailable: 4 }
    ];
 
    // Função para exibir os resultados da busca de caronas
    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        results.forEach(result => {
            const rideElement = document.createElement('div');
            rideElement.classList.add('ride');
            rideElement.innerHTML = `
                <p><strong>Origem:</strong> ${result.origin}</p>
                <p><strong>Destino:</strong> ${result.destination}</p>
Data: ${result.date}</p>
                <p><strong>Vagas Disponíveis:</strong> ${result.seatsAvailable}</p>
<button onclick="bookRide('${result.origin}', '${result.destination}', '${result.date}')">Reservar Carona</button>
            `;
            searchResults.appendChild(rideElement);
        });
    }
 
    // Função para buscar caronas disponíveis
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;
        const results = ridesData.filter(ride =>
            ride.origin.toLowerCase() === origin.toLowerCase() &&
            ride.destination.toLowerCase() === destination.toLowerCase() &&
ride.date === date
        );
        displaySearchResults(results);
    });
 
    // Função para oferecer uma carona
    offerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const offerOrigin = document.getElementById('offerOrigin').value;
        const offerDestination = document.getElementById('offerDestination').value;
        const offerDate = document.getElementById('offerDate').value;
        const seatsAvailable = document.getElementById('seatsAvailable').value;
        ridesData.push({ origin: offerOrigin, destination: offerDestination, date: offerDate, seatsAvailable: seatsAvailable });
        alert('Carona oferecida com sucesso!');
    });
});
 
// Função para reservar uma carona
function bookRide(origin, destination, date) {
    alert(`Reservado! Origem: ${origin}, Destino: ${destination}, Data: ${date}`);
}