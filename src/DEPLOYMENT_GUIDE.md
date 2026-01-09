# 🚀 Hướng dẫn Deploy Website TUMIKI lên GitHub Pages

## 📋 Tổng quan

Website TUMIKI sẽ được deploy tại: **https://tuyenpv161.github.io/tumiki/**

---

## ✅ Bước 1: Chuẩn bị Repository (Chỉ làm 1 lần)

### 1.1. Export code từ Figma Make

- Tìm nút **Export** hoặc **Download** trong Figma Make
- Download toàn bộ code về máy tính
- Giải nén vào thư mục `tumiki`

### 1.2. Khởi tạo Git Repository

Mở Terminal/Command Prompt tại thư mục dự án:

```bash
# Di chuyển vào thư mục dự án
cd tumiki

# Khởi tạo Git
git init

# Thêm tất cả files
git add .

# Commit lần đầu
git commit -m "Initial commit: TUMIKI website"

# Thêm remote repository
git remote add origin https://github.com/tuyenpv161/tumiki.git

# Đổi tên branch thành main
git branch -M main

# Push lên GitHub
git push -u origin main
```

---

## 🔧 Bước 2: Cài đặt GitHub Pages (Chỉ làm 1 lần)

### 2.1. Truy cập Settings

1. Mở repository: https://github.com/tuyenpv161/tumiki
2. Click vào tab **Settings**
3. Ở sidebar bên trái, click **Pages**

### 2.2. Cấu hình Source

Trong phần **Build and deployment**:
- **Source:** Chọn `GitHub Actions`

### 2.3. Hoàn tất

GitHub Actions sẽ tự động build và deploy khi bạn push code!

---

## 🏗️ Bước 3: Build và Deploy (Tự động)

### Cách hoạt động:

Khi bạn push code lên branch `main`, GitHub Actions sẽ:

1. ✅ Tự động cài đặt dependencies
2. ✅ Build website
3. ✅ Deploy lên GitHub Pages
4. ✅ Website sẽ có tại: https://tuyenpv161.github.io/tumiki/

### Kiểm tra trạng thái deployment:

1. Vào repository trên GitHub
2. Click tab **Actions**
3. Xem workflow **"Deploy to GitHub Pages"**
4. Đợi cho đến khi có dấu ✅ (thường mất 2-3 phút)

---

## 🔄 Bước 4: Cập nhật Website (Mỗi khi có thay đổi)

### Khi bạn sửa code trên Figma Make:

1. **Export** code mới từ Figma Make
2. **Copy** vào thư mục dự án (ghi đè files cũ)
3. **Chạy lệnh:**

```bash
# Thêm tất cả thay đổi
git add .

# Commit với message mô tả
git commit -m "Cập nhật [mô tả thay đổi]"

# Push lên GitHub
git push origin main
```

4. **Đợi 2-3 phút** để GitHub Actions tự động deploy
5. **Truy cập** https://tuyenpv161.github.io/tumiki/ để xem kết quả

---

## 📝 Các lệnh Git hữu ích

### Xem trạng thái hiện tại
```bash
git status
```

### Xem lịch sử commit
```bash
git log --oneline
```

### Xem thay đổi trước khi commit
```bash
git diff
```

### Hủy thay đổi chưa commit
```bash
git restore <tên-file>
```

---

## ⚠️ Xử lý lỗi thường gặp

### Lỗi 1: "Author identity unknown"

**Giải pháp:**
```bash
git config --global user.name "Tuyển Phan"
git config --global user.email "email@example.com"
```

### Lỗi 2: "Permission denied" khi push

**Giải pháp:**
1. Tạo Personal Access Token trên GitHub:
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate new token → Chọn scope: `repo`
2. Khi push, dùng token thay cho password

### Lỗi 3: GitHub Actions thất bại

**Kiểm tra:**
1. Vào tab **Actions** trên GitHub
2. Click vào workflow bị lỗi
3. Đọc error message
4. Thường là do:
   - Missing dependencies → Kiểm tra `package.json`
   - Build error → Kiểm tra code có lỗi syntax không

### Lỗi 4: Website hiển thị 404

**Giải pháp:**
1. Kiểm tra GitHub Pages có bật chưa (Settings → Pages)
2. Đảm bảo workflow đã chạy thành công
3. Đợi 5-10 phút rồi thử lại
4. Hard refresh browser: `Ctrl + Shift + R` (Windows) hoặc `Cmd + Shift + R` (Mac)

### Lỗi 5: Routing không hoạt động (trang con 404)

**Giải pháp:**
- ✅ Đã fix: Thêm `basename="/tumiki"` vào Router
- ✅ File workflow đã ở đúng vị trí: `.github/workflows/deploy.yml`
- Sau khi push code mới, website sẽ hoạt động đúng

---

## 🎯 Workflow khuyến nghị

### Khi làm việc hàng ngày:

```
1. Làm việc trên Figma Make
   ↓
2. Export code khi có thay đổi lớn
   ↓
3. Copy vào thư mục dự án
   ↓
4. git add . && git commit -m "Mô tả" && git push
   ↓
5. Đợi GitHub Actions deploy (2-3 phút)
   ↓
6. Kiểm tra website live
```

### Thời điểm nên deploy:

- ✅ Hoàn thành 1 tính năng mới
- ✅ Fix bugs quan trọng
- ✅ Kết thúc ngày làm việc
- ✅ Trước khi demo cho khách hàng

---

## 📞 Hỗ trợ

Nếu gặp vấn đề:
1. Đọc error message cẩn thận
2. Search trên Google: "[error message] github pages"
3. Kiểm tra GitHub Actions logs
4. Kiểm tra GitHub Pages settings

---

## 🎉 Hoàn tất!

Website của bạn đã sẵn sàng tại: **https://tuyenpv161.github.io/tumiki/**

Mỗi lần push code, website sẽ tự động cập nhật sau 2-3 phút! 🚀