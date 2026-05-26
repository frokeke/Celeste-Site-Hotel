const url ='http://localhost:3000'

const params = new URLSearchParams(window.location.search)

const hotelId = params.get('hotelId')

async function getRooms() {

    try {

        const response = await fetch(`${url}/rooms/hotel/${hotelId}`)

        const rooms = await response.json()

        console.log('ROOMS:', rooms)

        renderRooms(rooms)

    } catch (error) {

        console.error(error)

        alert('Erro ao buscar quartos')
    }
}

async function createRoom() {

    const roomData = {
        hotelId: hotelId,

        number: document.getElementById('number').value,

        type: document.getElementById('type').value,

        typeRoom: document.getElementById('typeRoom').value,

        capacity: Number(document.getElementById('capacity').value),

        priceDay: Number(document.getElementById('priceDay').value)
    }

    try {

        const response = await fetch( `${url}/rooms`,

            {

                method: 'POST',

                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(roomData)
            }
        )
        const data =
            await response.json()
        console.log(data)
        alert('Quarto criado!')
        getRooms()
    } catch (error) {
        console.error(error)
        alert('Erro ao criar quarto')
    }
}

function renderRooms(rooms) {
    const roomList =
        document.getElementById('room-list')

    roomList.innerHTML = ''
    if (rooms.length === 0) {
        roomList.innerHTML = `
            <h2>
                Nenhum quarto encontrado
            </h2>
        `
        return
    }

    rooms.forEach(room => {
        roomList.innerHTML += `
            <div class="room-card">
                <h2> Quarto ${room.number} </h2>

                <p> Tipo: ${room.type} </p>

                <p> Capacidade: ${room.capacity} pessoas </p>

                <p> Diária: R$ ${room.priceDay} </p>
                <p> Status: ${room.isOccupied? 'Ocupado' : 'Disponível'} </p>
                <button onclick="goToReservations('${room.id}')"> Reservar </button>
            </div>
        `
    })
}
function goToReservations(roomId) {
    window.location.href =`reservation.html?roomId=${roomId}`
}
getRooms()