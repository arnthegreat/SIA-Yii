<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Reservation</title>
    <link rel="stylesheet" href="../../web/css/reservations.css"> <!-- Existing styles -->
    <link rel="stylesheet" href="../../web/css/add_reservation.css"> <!-- New styles -->
    
</head>
<body>

    <div class="form-container">
    
        <div class="form-section">
            <h2>Add Reservation</h2>
            <form id="reservation-form">
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Enter name" required>
                
                <label for="plate-number">Plate Number:</label>
                <input type="text" id="plate-number" placeholder="Enter plate number" required>

                <label for="phone">Phone:</label>
                <input type="text" id="phone" placeholder="Enter phone number" required>

                <label for="parking-slot">Select Parking Slot:</label>
                <select id="parking-slot" required>
                    <option value="A1">A1</option>
                    <option value="A2">A2</option>
                    <option value="A3">A3</option>
                    <option value="A4">A4</option>
                </select>

                <button type="submit" class="btn">Add Reservation</button>
            </form>
        </div>
    </div>
    <script src="../../web/js/add_reservations.js" defer></script>
</body>
</html>