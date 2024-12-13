<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="../../web/css/login.css">
</head>
<body>
    <div class="login-wrapper">
        <div class="login-panel">
            <h2>Sign In</h2>
            <form id="login-form">
                <label for="username">USERNAME</label>
                <input type="text" id="username" placeholder="Username" required>

                <label for="password">PASSWORD</label>
                <input type="password" id="password" placeholder="Password" required>

                <div class="options">
                    <label><input type="checkbox"> Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>

                <button type="submit" class="btn">Sign In</button>
            </form>
        </div>

        <div class="welcome-panel">
            <h1>Welcome to login</h1>
        </div>
    </div>

    <script src="../../web/js/login.js"></script>
</body>
</html>
