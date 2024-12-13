// parkingslot.js

// Update the parking slots based on reservations
function updateParkingSlots() {
    const slots = ['A1', 'A2', 'A3', 'B1'];
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    const grid = document.getElementById('slots-grid');
    grid.innerHTML = '';

    slots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.classList.add('slot');
        const reservedSlot = reservations.find(reservation => reservation.parkingSlot === slot);
        if (reservedSlot) {
            slotElement.classList.add('reserved');
        } else {
            slotElement.classList.add('available');
        }
        slotElement.textContent = slot; 
        grid.appendChild(slotElement);
    });
}

// Initialize the page on load
window.onload = function() {
    // If it's parkingslots.html, update parking slots
    if (document.getElementById('slots-grid')) {
        updateParkingSlots();
    }
};
