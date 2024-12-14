// Update the reservations table
function updateReservationsTable() {
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    const tableBody = document.getElementById('reservations-table');
    tableBody.innerHTML = '';

    reservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reservation.name}</td>
            <td>${reservation.plateNumber}</td>
            <td>${reservation.phone}</td>
            <td>${reservation.parkingSlot}</td>
            <td><button class="btn danger" onclick="removeReservation('${reservation.parkingSlot}')">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Remove reservation and free up the slot
function removeReservation(parkingSlot) {
    let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations = reservations.filter(reservation => reservation.parkingSlot !== parkingSlot);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    // Update reservations table
    updateReservationsTable();
}

// Initialize the page on load
window.onload = function() {
    // If it's reservations.php, update reservations table
    if (document.getElementById('reservations-table')) {
        updateReservationsTable();
    }
};