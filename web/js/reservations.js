// Update the reservations table
function updateReservationsTable() {
    console.log('Current VIP Reservations:', localStorage.getItem('vip_reservations'));
    // Fetch regular reservations
    const regularReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    const tableBody = document.getElementById('reservations-table');
    tableBody.innerHTML = '';

    regularReservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reservation.name}</td>
            <td>${reservation.plateNumber}</td>
            <td>${reservation.phone}</td>
            <td>${reservation.parkingSlot}</td>
            <td><button class="btn danger" onclick="removeReservation('${reservation.parkingSlot}', 'regular')">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}
function updateVipReservationsTable() {
    const vipReservations = JSON.parse(localStorage.getItem('vip_reservations')) || [];
    const tableBody = document.getElementById('vip-reservations-table');
    tableBody.innerHTML = '';

    vipReservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reservation.name}</td>
            <td>${reservation.plateNumber}</td>
            <td>${reservation.phone}</td>
            <td>${reservation.parkingSlot}</td>
            <td><button class="btn danger" onclick="removeReservation('${reservation.parkingSlot}', 'vip')">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}
// Remove reservation and free up the slot
function removeReservation(parkingSlot, type) {
    let reservations;
    if (type === 'regular') {
        reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations = reservations.filter(reservation => reservation.parkingSlot !== parkingSlot);
        localStorage.setItem('reservations', JSON.stringify(reservations));
    } else if (type === 'vip') {
        reservations = JSON.parse(localStorage.getItem('vip_reservations')) || [];
        reservations = reservations.filter(reservation => reservation.parkingSlot !== parkingSlot);
        localStorage.setItem('vip_reservations', JSON.stringify(reservations));
    }

    // Update the tables
    updateReservationsTable();
    updateVipReservationsTable();
}

// Initialize the page on load
window.onload = function() {
    // If it's admin.html, set up form handler
    if (document.getElementById('reservation-form')) {
        document.getElementById('reservation-form').addEventListener('submit', handleReservationFormSubmit);
    }
    if (document.getElementById('vip-reservation-form')) {
        document.getElementById('vip-reservation-form').addEventListener('submit', handleVipReservationFormSubmit);
    }
    updateReservationsTable();
    updateVipReservationsTable();
};