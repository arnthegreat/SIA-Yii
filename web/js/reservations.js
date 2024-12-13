// Check if the user is logged in
if (!localStorage.getItem('userLoggedIn')) {
    // If not logged in, redirect to the login page
    window.location.href = '../../views/site/login.php';
}

// Function to handle reservation form submission
function handleReservationFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const plateNumber = document.getElementById('plate-number').value;
    const phone = document.getElementById('phone').value;
    const parkingSlot = document.getElementById('parking-slot').value;

    // Store reservation in localStorage
    let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push({ name, plateNumber, phone, parkingSlot });

    localStorage.setItem('reservations', JSON.stringify(reservations));

    // Update reservations table
    updateReservationsTable();
}

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

    // Update parking slots and table
    updateParkingSlots();
    updateReservationsTable();
}

// Initialize the page on load
window.onload = function() {
    // If it's admin.html, set up form handler
    if (document.getElementById('reservation-form')) {
        document.getElementById('reservation-form').addEventListener('submit', handleReservationFormSubmit);
        updateReservationsTable();
    }
};
