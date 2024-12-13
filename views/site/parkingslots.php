<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parking Slots</title>
    <link rel="stylesheet" href="../../web/css/parkingslots.css">
    <script src="../../web/js/parkingslots.js" defer></script>
    
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="logo">Park-King</div>
            <ul class="menu">
                <li class="menu-item"><a href="reservations.php">Reservations</a></li>
                <li class="menu-item active"><a href="parkingslots.php">Parking Slots</a></li>
            </ul>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="content-header">
                <h1>Parking Slots</h1>
                <p>View and manage parking slot availability.</p>
            </header>

            <div class="content-body">
                <!-- Parking Slots -->
                <section class="parking-slots">
                    <div class="legend">
                        <div class="legend-item">
                            <span class="slot available"></span> Available
                        </div>
                        <div class="legend-item">
                            <span class="slot reserved"></span> Reserved
                        </div>
                        <div class="legend-item">
                            <span class="slot occupied"></span> Occupied
                        </div>
                    </div>

                    <div class="slots-grid" id="slots-grid">
                        <!-- Slots will be dynamically rendered here -->
                    </div>
                </section>

                <!-- Booking Details -->
                <section class="booking-details">
                    <h2>Booking Details</h2>
                    <div class="details">
                        <p>Selected Slot: <span id="selected-slot">None</span></p>
                        <p>Name: <span id="costumerName"></span></p>
                        <p>Plate Number: <span id="costumerPlate"></span></p>
                        <p>Mobile Number: <span id="costumerNumber"></span></p>
                        <p>Rate: <span>₱50 per hour</span></p>
                        <p>Total Amount: <span id="total-amount">₱0</span></p>
                    </div>
                    <button class="btn">Book Slot</button>
                </section>
            </div>
        </main>
    </div>
</body>
</html>
