let gcashReferenceNo = ""; // Variable to store the GCash Reference Number

// Function to handle reservation form submission
function handleReservationFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const plateNumber = document.getElementById('plate-number').value;
  const phone = document.getElementById('phone').value;
  const parkingSlot = document.getElementById('parking-slot').value

  // Retrieve payment method
  const paymentMethod = gcashReferenceNo ? "GCash" : "Cash Only";

  // Retrieve existing reservations from localStorage
  let reservations = JSON.parse(localStorage.getItem('reservations')) || [];  

  // Check if the selected parking slot is already occupied
  const isSlotOccupied = reservations.some(reservation => reservation.parkingSlot === parkingSlot);

  if (isSlotOccupied) {
      alert('The selected parking slot is occupied. Please choose another slot.');
      return; // Exit the function if the slot is occupied
  }

  // Create reservation object
  const reservation = {
    name,
    plateNumber,
    phone,
    parkingSlot,
    paymentMethod,
    gcashReferenceNo: paymentMethod === "GCash" ? gcashReferenceNo : null, // Save reference only if GCash
  };


  // Add reservation to the list
  reservations.push(reservation);
  localStorage.setItem("reservations", JSON.stringify(reservations)); // Save to localStorage

  // Show success message
  alert('Reservation added successfully!');

  // Reset the form and clear GCash reference number
  document.getElementById("reservation-form").reset();
  gcashReferenceNo = ""; // Reset after successful reservation
}

// Modal functionality for GCash
document.addEventListener('DOMContentLoaded', function() {
  const gcashButton = document.getElementById('gcash-button');
  const gcashModal = document.getElementById('gcash-modal');
  const closeModal = document.getElementById('close-modal');
  const submitGcash = document.getElementById("submit-gcash");

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


  // Capture reference number when GCash is submitted
  submitGcash.addEventListener("click", function () {
    const gcashInput = document.getElementById("gcash-input").value.trim();

    if (gcashInput) {
      gcashReferenceNo = gcashInput; // Save reference number
      gcashModal.classList.remove("show"); // Hide modal
      alert("GCash Reference Number saved!");
    } else {
      alert("Please enter a valid GCash Reference Number.");
    }
  });
});
// Initialize the page on load
window.onload = function() {
  const form = document.getElementById('reservation-form');
  if (form) {
    form.addEventListener('submit', handleReservationFormSubmit);
  }
};
