<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
</head>
<body ng-app="loginApp">
<div ng-controller="LoginController as ctrl">
    <form ng-submit="ctrl.login()">
        <label for="email">Email:</label>
        <input type="email" id="email" ng-model="loginData.username" placeholder="Enter your email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" ng-model="loginData.password" placeholder="Enter your password" required>
        <button type="submit">Log in</button>
    </form>
</div>
    <script src="app.js"></script>
</body>
</html>
