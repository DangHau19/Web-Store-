// Gán thông tin đăng kí
function register() {
            const username = document.getElementById("username").value.trim();
            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const address = document.getElementById("address").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username && name && phone && email && password) {
                // Lưu vào localStorage
                const user = {
                    username: username,
                    name: name,
                    phone: phone,
                    address:address,
                    email: email,
                    password: password
                };
                localStorage.setItem("user", JSON.stringify(user));
                alert("Đăng ký thành công! Mời bạn đăng nhập.");
                window.location.href = "Login.html"; // Quay lại login
            } else {
                alert("Vui lòng nhập đầy đủ thông tin.");
            }
        }