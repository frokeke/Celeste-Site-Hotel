const url = "http://localhost:3000/hotels"
let allHotels = []


async function postHotel() {
    const hotelData = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        address: document.getElementById('address').value,
        ownerEmail: document.getElementById('ownerEmail').value
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(hotelData)
        })
        const data = await response.json()
        console.log(data)
        alert('Hotel cadastrado com sucesso!')
    } catch (error) {
        console.error('Erro ao cadastrar hotel:', error)
        alert('Erro ao cadastrar hotel.')
    }
}

async function getHotels() {
    try{
        const response = await fetch(url)
        const hotels = await response.json()
        allHotels = hotels
        renderHotels(hotels)
    } catch (error) {
        console.error('Erro ao buscar hotéis:', error)
        alert('Erro ao buscar hotéis.')
    }
}

async function viewRooms(hotelId) {
     window.location.href = `rooms.html?hotelId=${hotelId}`
}

async function searchHotels(){
    const searchValue = document.getElementById('search-input').value.toLowerCase()
    const filtered = allHotels.filter(hotel => hotel.name.toLowerCase().includes(searchValue))
    renderHotels(filtered)
}
function renderHotels(hotels) {
    const hotelList = document.getElementById('hotelList')
    hotelList.innerHTML = ''
    hotels.forEach(hotel => {
        hotelList.innerHTML += `
        <div class="hotel-card">
        <img class="hotel-image" src="https://i.imgur.com/cQXGavo.jpeg" alt="${hotel.name}">}
        <div class="hotel-info">
            <h3>${hotel.name}</h3>
            <p class="hotel-description">${hotel.description}</p>
            <p>${hotel.city}, ${hotel.state}</p>
            <p>${hotel.address}</p>
            <p>Contato: ${hotel.ownerEmail}</p>
            <button class="view-rooms-button" onclick="viewRooms('${hotel.id}')"> Ver quartos </button>
        </div>
        </div>
        `
    })
}

getHotels()