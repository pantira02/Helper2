// 📸 เปลี่ยนรูปโปรไฟล์
document.getElementById("uploadImage").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profileImage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// 🔄 เปลี่ยนสถานะพร้อมรับงาน / ไม่ว่าง
document.getElementById("toggleStatusBtn").addEventListener("click", () => {
  const btn = document.getElementById("toggleStatusBtn");
  if (btn.textContent.includes("พร้อมรับงาน")) {
    btn.textContent = "🔴 ไม่ว่าง";
    btn.classList.remove("btn-outline-primary");
    btn.classList.add("btn-danger");
  } else {
    btn.textContent = "🔵 พร้อมรับงาน";
    btn.classList.add("btn-outline-primary");
    btn.classList.remove("btn-danger");
  }
});

// ✅ รับงาน
document.getElementById("acceptJobBtn").addEventListener("click", () => {
  alert("✅ รับงานสำเร็จ! ระบบจะอัปเดต Google Sheet และแจ้งผู้จ้างผ่าน LINE OA");
  // 🛠 TODO: เชื่อม Google Apps Script เพื่ออัปเดตสถานะใน Sheet
});

// 💬 ส่งข้อความเริ่มต้นหาผู้จ้างผ่าน LINE
document.getElementById("chatBtn").addEventListener("click", () => {
  const message = encodeURIComponent("ขอบคุณที่จองงานครับ/ค่ะ 🙏");
  const lineUrl = `https://line.me/R/nv/chat`; // 👈 เพิ่ม userId หรือ groupId ถ้ามี
  window.open(lineUrl, "_blank");
});
