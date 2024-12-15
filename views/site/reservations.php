<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Parking Dashboard</title>
    <link rel="stylesheet" href="../../web/css/reservations.css">
    
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <aside class="sidebar">
        <img src="../../assets/ParKing (1).png" alt="Park-King Logo" class="logo">
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

                <!-- VIP Reservations Table -->
                <section class="table-section">
                    <h2>VIP Reservations</h2>
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
                        <tbody id="vip-reservations-table">
                            <!-- Rows will be dynamically added here -->
                        </tbody>
                    </table>
                </section>
            </div>
        </main>
    </div>

    <script src="../../web/js/reservations.js" defer></script>
</body>
</html>