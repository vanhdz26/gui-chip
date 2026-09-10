# Web "Đừng dỗi tui nữa nha Chip" 💌

## 1. Thêm ảnh của Chip
Tạo thư mục `assets` nếu chưa có, sau đó đặt ảnh của cô ấy vào đó với tên chính xác:

`chip.jpg`

Ví dụ:

```text
loi-chuc-qr/
├── index.html
├── style.css
├── script.js
├── qr.html
└── assets/
    └── chip.jpg   <-- ảnh của Chip
```

Có thể dùng `.jpg`, `.png` nhưng nếu đổi tên/đuôi thì sửa `assets/chip.jpg` trong `index.html` thành tên ảnh tương ứng.

## 2. Chạy thử
Mở project bằng VS Code và chạy bằng Live Server, hoặc mở `index.html` trực tiếp.

## 3. Đưa lên GitHub Pages
Tạo repository → upload toàn bộ file → Settings → Pages → Deploy from branch → chọn `main` / root → Save.

Sau khi GitHub Pages tạo link, mở `qr.html` trên link GitHub Pages để tạo mã QR.
