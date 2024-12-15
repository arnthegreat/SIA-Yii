// Function to handle VIP reservation form submission
function handleVipReservationFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('vip-name').value;
  const plateNumber = document.getElementById('vip-plate-number').value;
  const phone = document.getElementById('vip-phone').value;
  const parkingSlot = document.getElementById('vip-parking-slot').value;

  // Retrieve existing VIP reservations from localStorage
  let vipReservations = JSON.parse(localStorage.getItem('vip_reservations')) || [];

  // Check if the selected parking slot is already occupied
  const isSlotOccupied = vipReservations.some(reservation => reservation.parkingSlot === parkingSlot);

  if (isSlotOccupied) {
      alert('The selected VIP parking slot is occupied. Please choose another slot.');
      return; // Exit the function if the slot is occupied
  }

  // Store reservation in localStorage
  vipReservations.push({ name, plateNumber, phone, parkingSlot });
  localStorage.setItem('vip_reservations', JSON.stringify(vipReservations));

  // Show success message
  alert('VIP Reservation added successfully!');

  // Clear input fields
  document.getElementById('vip-reservation-form').reset();

  // Update the VIP reservations table
  updateVipReservationsTable();
}

document.addEventListener('DOMContentLoaded', function() {
  const gcashButton = document.getElementById('gcash-button');
  const gcashModal = document.getElementById('gcash-modal');
  const closeModal = document.getElementById('close-modal');

  // Show modal when GCash button is clicked
  gcashButton.addEventListener('click', function() {
    gcashModal.classList.add('show'); // Add 'show' class to display the modal
  });

  // Close modal when the close button is clicked
  closeModal.addEventListener('click', function() {
    gcashModal.classList.remove('show'); // Remove 'show' class to hide the modal
  });

  // Close modal if clicked outside the modal content
  window.addEventListener('click', function(event) {
    if (event.target === gcashModal) {
      gcashModal.classList.remove('show'); // Remove 'show' class if clicked outside
    }
  });
});

// Initialize the page on load
window.onload = function() {
  if (document.getElementById('vip-reservation-form')) {
    document.getElementById('vip-reservation-form').addEventListener('submit', handleVipReservationFormSubmit);
  }
  // Optionally, you can call updateVipReservationsTable() here to populate the table on page load
  updateVipReservationsTable();
};