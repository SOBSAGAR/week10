document.getElementById('peopleBtn').addEventListener('click', fetchPeople);
document.getElementById('speciesBtn').addEventListener('click', fetchSpecies);
document.getElementById('planetsBtn').addEventListener('click', fetchPlanets);

async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function fetchPeople() {
    const data = await fetchData('https://swapi.dev/api/people/');
    displayData(data.results);
}

async function fetchSpecies() {
    const data = await fetchData('https://swapi.dev/api/species/');
    displayData(data.results);
}

async function fetchPlanets() {
    const data = await fetchData('https://swapi.dev/api/planets/');
    displayData(data.results);
}

function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    data.forEach(item => {
        const card = `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Height: ${item.height} cm</p>
                    <p class="card-text">Mass: ${item.mass} kg</p>
                </div>
            </div>
        `;
        outputDiv.innerHTML += card;
    });
}
