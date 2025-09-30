// Giả lập dữ liệu khách hàng
let customers = [
  { username: "DangHau", name: "Hoàng Đăng Hậu", email: "DangHau@gmail.com", phone: "0987654321", password: "1234", locked: false },
  { username: "VoDoanh", name: "Trần Văn Võ Doanh", email: "VoDoanh@gmail.com", phone: "0123456789", password: "1234", locked: false },
  { username: "BaoQuoc", name: "Trần Đình Bảo Quốc", email: "BaoQuoc@gmail.com", phone: "0987654321", password: "1234", locked: false },
  { username: "MinhHuy", name: "Phan Lê Minh Huy", email: "MinhHuy@gmail.com", phone: "0123456789", password: "1234", locked: false }
];

// Render danh sách
function renderCustomers() {
  const tableBody = document.getElementById("customer-list");
  if (!tableBody) return;

  tableBody.innerHTML = "";
  customers.forEach((c, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${c.username}</td>
      <td>${c.name}</td>
      <td>${c.email}</td>
      <td>${c.phone}</td>
      <td>${c.locked ? "Đã khóa" : "Hoạt động"}</td>
      <td>
        <button class="action-btn reset" title="Reset mật khẩu" onclick="resetPassword(${index})">
          <i class="fa-solid fa-rotate-left"></i>
        </button>
        <button class="action-btn ${c.locked ? "locked" : "unlocked"}" title="Khóa/Mở tài khoản" onclick="toggleLock(${index})">
          <i class="fa-solid ${c.locked ? "fa-lock" : "fa-unlock"}"></i>
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Reset mật khẩu
function resetPassword(index) {
  customers[index].password = "0000";
  alert(`Mật khẩu của ${customers[index].username} đã được reset về 0000`);
}

// Khóa / Mở khóa tài khoản
function toggleLock(index) {
  customers[index].locked = !customers[index].locked;
  alert(`${customers[index].username} hiện ${customers[index].locked ? "đã bị khóa" : "được mở khóa"}`);
  renderCustomers();
}

// Render khi load trang
document.addEventListener("DOMContentLoaded", renderCustomers);