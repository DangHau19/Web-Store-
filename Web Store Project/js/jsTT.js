// Lấy các thông tin chỗ đăng kí để hiện thị trong trang thông tin
const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            document.getElementById("info").innerHTML = `
                <p><strong>👤 Username:</strong> ${user.username}</p>
                <p><strong>📝 Họ và tên:</strong> ${user.name}</p>
                <p><strong>📞 Số điện thoại:</strong> ${user.phone}</p>
                <p><strong>🏠 Địa chỉ:</strong> ${user.address}</p>
                <p><strong>📧 Email:</strong> ${user.email}</p>
            `;
        } else {
            document.getElementById("info").innerHTML = "<p>Chưa có thông tin người dùng.</p>";
        }
// Đăng xuất
        function logout() {
            localStorage.setItem("isLoggedIn", "false");
            window.location.href = "../Main.html";
        }

        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "../Login.html";
        }
//Đổi thông tin tượng trưng 
function changeInfo() {
            const message = document.getElementById("message");
            message.style.display = "block";   // hiện thông báo
            // Sau 3s quay về thongtin.html
            setTimeout(() => {
                window.location.href = "Thongtin.html";
            }, 3000);
        }

        if (localStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "../Login.html";
        }