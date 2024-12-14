// Function to handle reservation form submission
function handleReservationFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const plateNumber = document.getElementById('plate-number').value;
  const phone = document.getElementById('phone').value;
  const parkingSlot = document.getElementById('parking-slot').value;

  // Retrieve existing reservations from localStorage
  let reservations = JSON.parse(localStorage.getItem('reservations')) || [];

  // Check if the selected parking slot is already occupied
  const isSlotOccupied = reservations.some(reservation => reservation.parkingSlot === parkingSlot);

  if (isSlotOccupied) {
    alert('The selected parking slot is occupied. Please choose another slot.');
    return; // Exit the function if the slot is occupied
  }

  // Store reservation in localStorage
  reservations.push({ name, plateNumber, phone, parkingSlot });
  localStorage.setItem('reservations', JSON.stringify(reservations));

  // Show success message
  alert('Reservation added successfully!');

  // Clear input fields
  document.getElementById('reservation-form').reset();
}

// Initialize the page on load
window.onload = function() {
  if (document.getElementById('reservation-form')) {
      document.getElementById('reservation-form').addEventListener('submit', handleReservationFormSubmit);
  }
};