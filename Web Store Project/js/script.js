
const adminEmail = "hoangdanghau19@gmail.com";
const adminPassword = "123";

// Hàm đăng ký user mới
function register() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (email && password) {
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Đăng ký thành công! Giờ bạn có thể đăng nhập.");
    } else {
        alert("Vui lòng nhập đầy đủ email và mật khẩu để đăng ký.");
    }
}
// Hàm đăng nhập
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error");
    // Lấy thông tin người dùng đã đăng ký (nếu có)
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    // Nếu là Admin
    if (email === adminEmail && password === adminPassword) {
        window.location.href = "Admin.html";
        return;
    }
    // Nếu là User đã đăng ký
    if (email === savedEmail && password === savedPassword) {
        window.location.href = "User.html";
        return;
    }
    // Sai thông tin
    errorMsg.style.display = "block";
}
document.getElementById("searchBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        window.location.href = "Search.html";
    }
});

