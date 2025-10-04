const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            document.getElementById("info").innerHTML = `
                <p><strong>👤 Username:</strong> ${user.username}</p>
                <p><strong>📝 Họ và tên:</strong> ${user.name}</p>
                <p><strong>📞 Số điện thoại:</strong> ${user.phone}</p>
                <p><strong>📧 Email:</strong> ${user.email}</p>
            `;
        } else {
            document.getElementById("info").innerHTML = "<p>Chưa có thông tin người dùng.</p>";
        }

        function logout() {
            localStorage.setItem("isLoggedIn", "false");
            window.location.href = "../Main.html";
        }

        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "../Login.html";
        }
function changeInfo() {
            const message = document.getElementById("message");
            message.style.display = "block";   // hiện thông báo
            // Sau 5s quay về thongtin.html
            setTimeout(() => {
                window.location.href = "Thongtin.html";
            }, 3000);
        }

        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "../Login.html";
        }