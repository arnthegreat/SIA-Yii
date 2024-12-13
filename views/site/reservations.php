<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Parking Dashboard</title>
    <link rel="stylesheet" href="../web/css/reservations.css">
    <script src="../web/js/reservations.js" defer></script>
    
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="logo">Park-King</div>
            <ul class="menu">
                <li class="menu-item active"><a href="reservations.php">Reservations</a></li>
                <li class="menu-item"><a href="parkingslots.php">Parking Slots</a></li>
            </ul>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <header class="content-header">
                <h1>Admin Parking Dashboard</h1>
                <p>Manage customer reservations and parking slots efficiently.</p>
            </header>
            <div class="content-body">
                <!-- Reservation Form -->
                <section class="form-section">
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
                            <option value="B1">B1</option>
                        </select>

                        <button type="submit" class="btn">Reserve Slot</button>
                    </form>
                </section>

                <!-- Reservations Table -->
                <section class="table-section">
                    <h2>Reservations</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Plate Number</th>
                                <th>Phone</th>
                                <th>Reserved Slot</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="reservations-table">
                            <!-- Rows will be dynamically added here -->
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    </div>
</body>
</html>
