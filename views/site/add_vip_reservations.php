<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VIP Reservations</title>
    <link rel="stylesheet" href="../../web/css/add_reservations.css"> <!-- Use the same CSS -->
    
</head>
<body>
    <div class="container">
        <!-- Left Section: Form -->
        <div class="form-section">
            <h2>Add VIP Reservation</h2>
            <form id="vip-reservation-form">
                <label for="vip-name">Name:</label>
                <input type="text" id="vip-name" placeholder="Enter name" required>

                <label for="vip-plate-number">Plate Number:</label>
                <input type="text" id="vip-plate-number" placeholder="Enter plate number" required>

                <label for="vip-phone">Phone Number:</label>
                <input type="text" id="vip-phone" placeholder="Enter phone number" required>

                <label for="vip-parking-slot">Select VIP Parking Slot:</label>
                <select id="vip-parking-slot" required>
                    <option value="V1">V1</option>
                    <option value="V2">V2</option>
                    <option value="V3">V3</option>
                    <option value="V4">V4</option>
                </select>
                <label for="payment-method">Payment Method:</label>
                <div class="payment-methods">
                    <button type="button" class="btn gcash-btn" id="gcash-button">GCash Payment</button>
                    <button type="button" class="btn cash-btn" id="cash-button">Cash Payment</button>
                </div>

                <!-- Hidden input for GCash Reference Number -->
                <input type="hidden" id="gcash-reference" name="gcash-reference" value="Cash Payment">

                <button type="submit" class="btn">Add VIP Reservation</button>
            </form>
        </div>
        
        <!-- Right Section: Logo & Description -->
        <div class="info-section">
            <img src="../../assets/ParKing (1).png" alt="Park-King Logo" class="logo">
            <p class="description">VIP Parking Description</p>
        </div>
    </div>
    <!-- Modal for GCash Payment -->
    <div id="gcash-modal" class="modal">
        <div class="modal-content">
            <span class="close-btn" id="close-modal">&times;</span>
            <h3>GCash Payment</h3>
            <img src="../../assets/QR.jpg" alt="GCash QR" class="modal-image">
            <input type="text" placeholder="Enter Reference Number" id="gcash-input" class="modal-input">
            <button class="btn" id="submit-gcash">Submit</button>
        </div>
    </div>

    <script src="../../web/js/add_vip_reservations.js" defer></script>
</body>
</html>