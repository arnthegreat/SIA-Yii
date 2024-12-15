<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Reservation</title>
    <link rel="stylesheet" href="../../web/css/add_reservations.css"> <!-- Updated styles -->
</head>
<body>
    <div class="container">
        <!-- Left Section: Form -->
        <div class="form-section">
            <h2>Add Reservation</h2>
            <form id="reservation-form">
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Enter name" required>

                <label for="plate-number">Plate Number:</label>
                <input type="text" id="plate-number" placeholder="Enter plate number" required>

                <label for="phone">Phone Number:</label>
                <input type="text" id="phone" placeholder="Enter phone number" required>

                <label for="parking-slot">Slot:</label>
                <select id="parking-slot" required>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="A3">A3</option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="B3">B3</option>
                    <option value="C1">C1</option>
                    <option value="C2">C2</option>
                    <option value="C3">C3</option>
                </select>

                <label for="payment-method">Payment Method:</label>
                <div class="payment-methods">
                    <button type="button" class="btn gcash-btn" id="gcash-button">GCash Payment</button>
                    <button type="button" class="btn cash-btn" id="cash-button">Cash Payment</button>
                </div>

                <!-- Hidden input for GCash Reference Number -->
                <input type="hidden" id="gcash-reference" name="gcash-reference" value="Cash Payment">

                <button type="submit" class="btn">Add Reservation</button>
            </form>
        </div>

        <!-- Right Section: Logo & Description -->
        <div class="info-section">
            <img src="../../assets/ParKing (1).png" alt="Park-King Logo" class="logo">
            <p class="description">Description</p>
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


    <script src="../../web/js/add_reservations.js" defer></script>
</body>
</html>
