// Global variable to store the currently selected slot
let selectedSlotElement = null;

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
            if (reservedSlot.status === 'occupied') {
                slotElement.classList.add('occupied'); // Apply "occupied" status if present
            }
            slotElement.onclick = () => displayReservationDetails(reservedSlot, slotElement);
        } else {
            slotElement.classList.add('available');
            slotElement.onclick = () => displayReservationDetails({ parkingSlot: slot }, slotElement);
        }

        grid.appendChild(slotElement);
    });
}

function updateVipParkingSlots() {
    const vipslots = ['V1', 'V2', 'V3', 'V4'];
    const vipreservations = JSON.parse(localStorage.getItem('vip_reservations')) || [];
    const grid = document.getElementById('vip-slots-grid');
    grid.innerHTML = '';

    vipslots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.classList.add('slot');
        slotElement.textContent = slot;

        const reservedSlot = vipreservations.find(reservation => reservation.parkingSlot === slot);
        if (reservedSlot) {
            slotElement.classList.add('reserved');
            if (reservedSlot.status === 'occupied') {
                slotElement.classList.add('occupied'); // Apply "occupied" status if present
            }
            slotElement.onclick = () => displayReservationDetails(reservedSlot, slotElement);
        } else {
            slotElement.classList.add('available');
            slotElement.onclick = () => displayReservationDetails({ parkingSlot: slot }, slotElement);
        }

        grid.appendChild(slotElement);
    });
}

// Function to display reservation details
function displayReservationDetails(reservation, slotElement) {
    document.getElementById('selected-slot').textContent = reservation.parkingSlot;
    document.getElementById('costumerName').textContent = reservation.name || 'N/A';
    document.getElementById('costumerPlate').textContent = reservation.plateNumber || 'N/A';
    document.getElementById('costumerNumber').textContent = reservation.phone || 'N/A';
    document.getElementById('total-amount').textContent = "₱50"; // Adjust the rate calculation as needed.

    // Store the selected slot for later
    selectedSlotElement = slotElement;
}

// Show the receipt modal
function showReceiptModal(reservation) {
    const modal = document.getElementById('receipt-modal');
    document.getElementById('receipt-slot').textContent = reservation.parkingSlot || 'N/A';
    document.getElementById('receipt-name').textContent = reservation.name || 'N/A';
    document.getElementById('receipt-plate').textContent = reservation.plateNumber || 'N/A';
    document.getElementById('receipt-number').textContent = reservation.phone || 'N/A';
    document.getElementById('receipt-amount').textContent = "₱50"; // Adjust if needed
    modal.style.display = 'flex';
}

// Hide the receipt modal
document.getElementById('close-modal').onclick = function () {
    document.getElementById('receipt-modal').style.display = 'none';
};

// Print the receipt
document.getElementById('print-receipt').onclick = function () {
    window.print(); // This will print the current modal content
    document.getElementById('receipt-modal').style.display = 'none'; // Close modal after printing
};

// Function to mark the selected slot as occupied when the button is clicked
document.getElementById('mark-occupied').onclick = function () {
    if (selectedSlotElement && !selectedSlotElement.classList.contains('occupied')) {
        selectedSlotElement.classList.remove('reserved');
        selectedSlotElement.classList.add('occupied');

        // Update localStorage or reflect the change
        const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        const vipreservations = JSON.parse(localStorage.getItem('vip_reservations')) || [];
        const slotId = document.getElementById('selected-slot').textContent;

        const updatedReservations = reservations.map(res => {
            if (res.parkingSlot === slotId) {
                return { ...res, status: 'occupied' }; // Update the status to 'occupied'
            }
            return res;
        });

        const updatedVipReservations = vipreservations.map(res => {
            if (res.parkingSlot === slotId) {
                return { ...res, status: 'occupied' }; // Update the status to 'occupied'
            }
            return res;
        });

        localStorage.setItem('reservations', JSON.stringify(updatedReservations));
        localStorage.setItem('vipreservations', JSON.stringify(updatedVipReservations));

        // Get the reservation details for the modal
        const reservation = updatedReservations.find(res => res.parkingSlot === slotId) || {};
        showReceiptModal(reservation);
    }
};

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('receipt-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
        localStorage.setItem('vip_reservations', JSON.stringify(updatedVipReservations));
    }
};

// Initialize the page on load
window.onload = function () {
    if (document.getElementById('slots-grid')) {
        updateParkingSlots();
        updateVipParkingSlots();
    }
};
