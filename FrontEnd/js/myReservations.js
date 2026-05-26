const token = localStorage.getItem('token')

if(!token) {
    window.location.href =
        './login.html'
}



async function loadReservations() {
    try {
        const response = await fetch('http://localhost:3000/reservations/my-reservations',

                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            )

        const reservations = await response.json()

        const container = document.getElementById('reservations-container')

        container.innerHTML = ''

        if(reservations.length === 0) {

            container.innerHTML = `
                <h2>
                    Nenhuma reserva encontrada
                </h2>
            `
            return
        }

        reservations.forEach(reservation => {

            container.innerHTML += `

                <div class="reservation-card">

                    <img src="https://i.imgur.com/50pzbX9.png" class="reservation-image" >

                    <div class="reservation-info">

                        <h2> ${reservation.room.hotel.name} </h2>

                        <p> Quarto: ${reservation.room.number} </p>

                        <p> Tipo: ${reservation.room.type} </p>

                        <p> Check-In: ${new Date( reservation.checkIn ).toLocaleDateString() } </p>

                        <p> Check-Out: ${new Date( reservation.checkOut ).toLocaleDateString()} </p>
                        
                        <p> Diária: R$ ${reservation.room.priceDay} </p>

                        <p> Status: ${reservation.status} </p>

                        <button
                            class="cancel-button" onclick="cancelReservation('${reservation.id}')">
                            Cancelar Reserva
                        </button>

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



function logout() {

    localStorage.removeItem('token')

    window.location.href = './login.html'
}

loadReservations()