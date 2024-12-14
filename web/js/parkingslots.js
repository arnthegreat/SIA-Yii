// parkingslot.js

// Update the parking slots based on reservations
function updateParkingSlots() {
    const slots = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    const grid = document.getElementById('slots-grid');
    grid.innerHTML = '';

    slots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.classList.add('slot');
        slotElement.textContent = slot; 

        const reservedSlot = reservations.find(reservation => reservation.parkingSlot === slot);
        if (reservedSlot) {
            slotElement.classList.add('reserved');
            slotElement.onclick = () => displayReservationDetails(reservedSlot);
        } else {
            slotElement.classList.add('available');
        }

        grid.appendChild(slotElement);
    });
}

// Function to display reservation details
function displayReservationDetails(reservation) {
    const detailsSection = document.querySelector('.booking-details .details');
    detailsSection.innerHTML = `
        <p>Selected Slot: <span id="selected-slot">${reservation.parkingSlot}</span></p>
        <p>Name: <span>${reservation.name}</span></p>
        <p>Plate Number: <span>${reservation.plateNumber}</span></p>
        <p>Phone: <span>${reservation.phone}</span></p>
        <p>Rate: <span>$50 per hour</span></p>
        <p>Total Amount: <span id="total-amount">$50</span></p>
    `;
}

// Initialize the page on load
window.onload = function() {
    // If it's parkingslots.html, update parking slots
    if (document.getElementById('slots-grid')) {
        updateParkingSlots();
    }
};