// Update the regular reservations table
function updateReservationsTable() {
    console.log('Current Regular Reservations:', localStorage.getItem('reservations'));
    const regularReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    const tableBody = document.getElementById('reservations-table');
    tableBody.innerHTML = ''; // Clear table body

    regularReservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reservation.name}</td>
            <td>${reservation.plateNumber}</td>
            <td>${reservation.phone}</td>
            <td>${reservation.parkingSlot}</td>
            <td>${reservation.gcashReferenceNo || 'Cash Only'}</td>
            <td><button class="btn danger" onclick="removeReservation('${reservation.parkingSlot}', 'regular')">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Update the VIP reservations table
function updateVipReservationsTable() {
    console.log('Current VIP Reservations:', localStorage.getItem('vip_reservations'));
    const vipReservations = JSON.parse(localStorage.getItem('vip_reservations')) || [];
    const tableBody = document.getElementById('vip-reservations-table');
    tableBody.innerHTML = ''; // Clear table body

    vipReservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reservation.name}</td>
            <td>${reservation.plateNumber}</td>
            <td>${reservation.phone}</td>
            <td>${reservation.parkingSlot}</td>
            <td>${reservation.gcashReferenceNo || 'Cash Only'}</td>
            <td><button class="btn danger" onclick="removeReservation('${reservation.parkingSlot}', 'vip')">Remove</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Unified removeReservation function for both tables
function removeReservation(parkingSlot, type) {
    if (type === 'regular') {
        let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
        reservations = reservations.filter(reservation => reservation.parkingSlot !== parkingSlot);
        localStorage.setItem("reservations", JSON.stringify(reservations));
        updateReservationsTable(); // Refresh the regular reservations table
    } else if (type === 'vip') {
        let vipReservations = JSON.parse(localStorage.getItem("vip_reservations")) || [];
        vipReservations = vipReservations.filter(reservation => reservation.parkingSlot !== parkingSlot);
        localStorage.setItem("vip_reservations", JSON.stringify(vipReservations));
        updateVipReservationsTable(); // Refresh the VIP reservations table
    }
}

// Handle form submission for regular reservations
function handleReservationFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newReservation = {
        name: formData.get('name'),
        plateNumber: formData.get('plateNumber'),
        phone: formData.get('phone'),
        parkingSlot: formData.get('parkingSlot'),
        gcashReferenceNo: formData.get('gcashReferenceNo'),
    };

    let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push(newReservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    updateReservationsTable(); // Update the table
    event.target.reset(); // Clear the form
}

// Handle form submission for VIP reservations
function handleVipReservationFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newVipReservation = {
        name: formData.get('name'),
        plateNumber: formData.get('plateNumber'),
        phone: formData.get('phone'),
        parkingSlot: formData.get('parkingSlot'),
        gcashReferenceNo: formData.get('gcashReferenceNo'),
    };

    let vipReservations = JSON.parse(localStorage.getItem('vip_reservations')) || [];
    vipReservations.push(newVipReservation);
    localStorage.setItem('vip_reservations', JSON.stringify(vipReservations));

    updateVipReservationsTable(); // Update the table
    event.target.reset(); // Clear the form
}

// Initialize the page on load
window.onload = function () {
    // Set up form handlers if the forms exist
    if (document.getElementById('reservation-form')) {
        document.getElementById('reservation-form').addEventListener('submit', handleReservationFormSubmit);
    }
    if (document.getElementById('vip-reservation-form')) {
        document.getElementById('vip-reservation-form').addEventListener('submit', handleVipReservationFormSubmit);
    }

    // Update the tables initially
    updateReservationsTable();
    updateVipReservationsTable();
};
