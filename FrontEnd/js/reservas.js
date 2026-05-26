const token = localStorage.getItem('token')

if(!token) {
    window.location.href ='./login.html'
}

const params = new URLSearchParams(window.location.search)
const roomId = params.get('roomId')

async function loadReservations() {

    try {

        const response = await fetch(`http://localhost:3000/reservations/my-reservations`,

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            )

        const reservations = await response.json()

        console.log(reservations)

        const container = document.getElementById('reservations-container')

        container.innerHTML = ''

        if(reservations.length === 0) {
            container.innerHTML = `
                <h2> Nenhuma reserva encontrada </h2>
            `
            return
        }

        reservations.forEach(reservation => {

            container.innerHTML += `

                <div class="reservation-card">

                <img src="${reservation.room.hotel.image}" class="reservation-image">

                    <div class="reservation-info">

                        <div>
                        <h2> ${reservation.room.hotel.name} </h2>

                        <p> Quarto: ${reservation.room.number} </p>
                        <p> Tipo: ${reservation.room.type} </p>
                        <p> Check-In: ${new Date(reservation.checkIn).toLocaleDateString()} </p>

                        <p>Check-Out: ${new Date(reservation.checkOut).toLocaleDateString()} </p>

                        <p> Diária: R$ ${reservation.totalPrice} </p>

                        <p> Status: ${reservation.status} </p>
                        </div>

                        <div class="reservation-actions">

                        <button class="cancel-button" onclick="cancelReservation('${reservation.id}')">
                        Cancelar
                        </button>

                        </div>

                    </div>

                </div>
            `
        })
    } catch(error) {
        console.error(error)
    }
}



async function cancelReservation(id) {

    try {
        await fetch(`http://localhost:3000/reservations/${id}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        )

        alert('Reserva cancelada!')

        loadReservations()
    } catch(error) {
        console.error(error)
    }
}

loadReservations()