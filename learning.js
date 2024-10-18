//-----------Home Page Main Image Changer --------------------

		const images = ["image1.png", "image1a.png", "image1b.png","image1c.png"]; // List of images
		let currentIndex = 0; // Track the current image index

			document.getElementById('mainImage').addEventListener('click', function () {
		// Change the image source to the next one in the array
			currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last one
		this.src = images[currentIndex];
	});

//--------------JavaScript validation Part ------------------

	// Switching between login and signup forms
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToLogin = document.getElementById('switchToLogin');

        switchToSignup.addEventListener('click', () => {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });

        switchToLogin.addEventListener('click', () => {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });

        // Login Validation
        document.getElementById('loginButton').addEventListener('click', function () {
            let valid = true;

            const password = document.getElementById('loginPassword').value;

            document.getElementById('usernameError').style.display = 'none';
            document.getElementById('passwordError').style.display = 'none';
			
            if (!username) {
                document.getElementById('usernameError').textContent = 'Invalid Username.';
                document.getElementById('usernameError').style.display = 'block';
                valid = false;
            }

            if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
                document.getElementById('passwordError').style.display = 'block';
                valid = false;
            }

            if (valid) {
                alert('Login Successfully...');
                window.location.href = 'index.html';
            }
        });

        // Signup Validation
        document.getElementById('signupButton').addEventListener('click', function () {
            let valid = true;

            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            document.querySelectorAll('.error-message').forEach(error => error.style.display = 'none');

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('signupEmailError').textContent = 'Invalid email address';
                document.getElementById('signupEmailError').style.display = 'block';
                valid = false;
            }

            if (password.length < 6) {
                document.getElementById('signupPasswordError').textContent = 'Password must be at least 6 characters long';
                document.getElementById('signupPasswordError').style.display = 'block';
                valid = false;
            }

            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
                document.getElementById('confirmPasswordError').style.display = 'block';
                valid = false;
            }

            if (valid) {
                alert('Sign Up Successfully...');
                window.location.href = 'login.html';
            }
        });          