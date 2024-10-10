<?php
include('../config/db-config.php');
include('../models/user-model.php');

class AuthController {
    public function login($email, $password) {
        $userModel = new UserModel();
        $user = $userModel->getUserByEmail($email);
        
        if ($user && password_verify($password, $user['password'])) {
            // Login success
            $_SESSION['user_id'] = $user['id'];
            header("Location: /pages/dashboard.php");
        } else {
            // Invalid login
            echo "Invalid email or password!";
        }
    }

    public function register($fullname, $email, $password) {
        // Registration logic
    }
}
