  // AJAX to handle form submissions

        // Form 1: Send Email
        $('#emailForm').on('submit', function(e) {
            e.preventDefault();
            let email = $('#email').val();
            $.ajax({
                url: 'check_email.php',
                type: 'POST',
                data: { email: email },
                success: function(response) {
                    $('#emailResponse').text(response.message);
                    if (response.success) {
                        showNextForm(2); // Show form 2 if email is sent
                    }
                }
            });
        });

        // Form 2: Verify Code
        $('#codeForm').on('submit', function(e) {
            e.preventDefault();
            let code = $('#code').val();
            $.ajax({
                url: 'verify_code.php',
                type: 'POST',
                data: { code: code },
                success: function(response) {
                    $('#codeResponse').text(response.message);
                    if (response.success) {
                        showNextForm(3); // Show form 3 if code is correct
                    }
                }
            });
        });

        // Form 3: Reset Password
        $('#resetForm').on('submit', function(e) {
            e.preventDefault();
            let newPassword = $('#new_password').val();
            let confirmPassword = $('#confirm_password').val();
            if (newPassword !== confirmPassword) {
                $('#resetResponse').text("Passwords do not match!");
                return;
            }
            $.ajax({
                url: 'reset_password.php',
                type: 'POST',
                data: { new_password: newPassword },
                success: function(response) {
                    $('#resetResponse').text(response.message);
                    if (response.success) {
                        window.location.href = 'login.php'; // Redirect to login page
                    }
                }
            });
        });

        // Function to show the next form based on the step
        function showNextForm(step) {
            $('.form-section').removeClass('active');
            $('#form' + step).addClass('active');
        }