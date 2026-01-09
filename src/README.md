# 🏢 Viện Công nghệ TUMIKI - Website Chính thức

Website chính thức của Viện Công nghệ TUMIKI, được xây dựng bằng React, TypeScript, Tailwind CSS và Vite.

🌐 **Live Site:** https://tuyenpv161.github.io/tumiki/

---

## ✨ Tính năng chính

- 🎨 **Thiết kế hiện đại** lấy cảm hứng từ edX
- 🎯 **Màu sắc thương hiệu:** #EE973C (cam) và #007FC0 (xanh dương)
- 🌍 **Đa ngôn ngữ:** Tiếng Việt & English
- 📱 **Responsive Design:** Tối ưu cho mọi thiết bị
- 🧭 **React Router:** Điều hướng mượt mà giữa các trang
- ⚡ **Performance:** Build với Vite cho tốc độ tối ưu

---

## 📂 Cấu trúc trang

- **Trang chủ:** Hero section, giới thiệu lĩnh vực, dự án, đối tác, tin tức
- **Về chúng tôi:** Giới thiệu chung, cơ cấu tổ chức, chức năng nhiệm vụ
- **Lĩnh vực hoạt động:** Các lĩnh vực công nghệ chính
- **Nghiên cứu khoa học:** Lĩnh vực nghiên cứu và sáng chế
- **Sản phẩm:** Các sản phẩm công nghệ
- **Tư vấn:** Dịch vụ tư vấn
- **Đối tác:** Phân loại đối tác trong nước và quốc tế
- **Tin tức:** Tin tức và sự kiện
- **Liên hệ:** Thông tin liên hệ

---

## 🚀 Quick Start - Deploy ngay

### Bước 1: Export code từ Figma Make

Tải toàn bộ code về máy

### Bước 2: Tạo repository trên GitHub

1. Truy cập https://github.com/new
2. Repository name: `tumiki`
3. Public
4. Create repository

### Bước 3: Push code lên GitHub

Mở Terminal/Command Prompt tại thư mục code:

```bash
# Khởi tạo Git
git init

# Thêm tất cả files
git add .

# Commit
git commit -m "Deploy TUMIKI website"

# Thêm remote (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/tumiki.git

# Đổi sang branch main
git branch -M main

# Push lên GitHub
git push -u origin main
```

### Bước 4: Bật GitHub Pages

1. Vào repository trên GitHub
2. **Settings** → **Pages**
3. **Source:** Chọn `GitHub Actions`
4. Đợi 2-3 phút

✅ **Website live tại:** `https://YOUR_USERNAME.github.io/tumiki/`

---

## 🔄 Cập nhật code

Mỗi khi có thay đổi:

```bash
git add .
git commit -m "Mô tả thay đổi"
git push
```

GitHub Actions sẽ tự động deploy sau 2-3 phút!

---

## 🛠️ Development

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở http://localhost:5173

### Build production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 📋 Technical Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Charts:** Recharts
- **Deployment:** GitHub Pages với GitHub Actions

---

## 📁 Project Structure

```
tumiki/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── components/                 # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   └── ...
├── pages/                      # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   └── ...
├── public/                     # Static assets
├── src/
│   ├── main.tsx               # App entry point
│   └── styles/
│       └── globals.css        # Global styles
├── App.tsx                    # Main app component
├── vite.config.ts            # Vite configuration
├── package.json
└── README.md
```

---

## ⚙️ Cấu hình quan trọng

### vite.config.ts
```typescript
export default defineConfig({
  base: '/tumiki/',  // Đảm bảo khớp với tên repository
  // ...
});
```

### App.tsx
```typescript
<Router basename="/tumiki">  // Đảm bảo khớp với base path
  {/* ... */}
</Router>
```

---

## 🐛 Troubleshooting

### Website hiển thị 404
- Kiểm tra GitHub Pages đã bật: Settings → Pages
- Đảm bảo Source = "GitHub Actions"
- Đợi 5-10 phút sau khi push
- Hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### Routing không hoạt động
- ✅ Đã fix: `basename="/tumiki"` trong Router
- Push code mới để áp dụng fix

### GitHub Actions thất bại
- Vào tab **Actions** để xem logs
- Kiểm tra `package.json` có đầy đủ dependencies
- Đảm bảo code không có lỗi syntax

---

## 📖 Tài liệu đầy đủ

Xem file [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) để có hướng dẫn chi tiết hơn.

---

## 📞 Support

Nếu gặp vấn đề khi deploy:
1. Kiểm tra GitHub Actions logs
2. Đọc file DEPLOYMENT_GUIDE.md
3. Kiểm tra Settings → Pages trên GitHub

---

## 📄 License

© 2026 Viện Công nghệ TUMIKI. All rights reserved.