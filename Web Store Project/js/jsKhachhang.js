// Khi bấm reset mật khẩu
    document.querySelectorAll(".action-btn.reset").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("Đã reset mật khẩu về 0000");
      });
    });

    // Khi bấm khóa/mở tài khoản
    document.querySelectorAll(".action-btn.unlocked, .action-btn.locked").forEach(btn => {
      btn.addEventListener("click", () => {
        const icon = btn.querySelector("i");
        if (btn.classList.contains("unlocked")) {
          btn.classList.remove("unlocked");
          btn.classList.add("locked");
          icon.classList.remove("fa-unlock");
          icon.classList.add("fa-lock");
          alert("Tài khoản này đã bị khóa");
        } else {
          btn.classList.remove("locked");
          btn.classList.add("unlocked");
          icon.classList.remove("fa-lock");
          icon.classList.add("fa-unlock");
          alert("Tài khoản này đã được mở khóa");
        }
      });
    });