
function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error");

    // Lấy thông tin user đã lưu
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && email === user.email && password === user.password) {
        // Lưu trạng thái đăng nhập
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "User/User.html";
        return;
    }
    errorMsg.style.display = "block";
}
document.getElementById("searchBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        window.location.href = "Search.html";
    }
});

