# 🏆 Backend Test Case - PT EIGEN TRI MATHEMA

## 📌 Deskripsi Proyek

Ini adalah **proyek Backend Test Case** untuk PT EIGEN TRI MATHEMA.  
Aplikasi ini memungkinkan **anggota (Member) meminjam dan mengembalikan buku** sesuai dengan aturan yang telah ditentukan.  
Dibangun menggunakan **NestJS & PostgreSQL**, dengan dokumentasi API melalui **Swagger**.

---

## ⚡ Fitur yang Telah Diimplementasikan

✅ **Anggota dapat meminjam buku** (maksimal 2 buku per anggota)  
✅ **Buku yang sedang dipinjam tidak dapat dipinjam oleh anggota lain**  
✅ **Anggota yang terlambat mengembalikan buku lebih dari 7 hari akan dikenakan penalti**  
✅ **Anggota yang dalam masa penalti tidak bisa meminjam buku selama 3 hari**  
✅ **Menampilkan daftar buku yang tersedia (tidak termasuk yang sedang dipinjam)**  
✅ **Menampilkan daftar anggota beserta jumlah buku yang mereka pinjam**  
✅ **Swagger API Documentation tersedia untuk memudahkan testing API**

---

## 🚀 Teknologi yang Digunakan

| Teknologi      | Deskripsi                                                     |
| -------------- | ------------------------------------------------------------- |
| **NestJS**     | Framework Backend berbasis TypeScript                         |
| **PostgreSQL** | Database SQL yang digunakan dalam proyek ini                  |
| **TypeORM**    | ORM yang digunakan untuk menghubungkan NestJS dengan database |
| **Swagger**    | Dokumentasi API interaktif                                    |
| **Jest**       | Unit testing untuk memastikan fitur berjalan dengan baik      |

---

## 📂 Struktur Folder

backend-test-case │── src │ ├── book # Module untuk buku │ │ ├── book.entity.ts │ │ ├── book.service.ts │ │ ├── book.controller.ts │ ├── member # Module untuk anggota │ │ ├── member.entity.ts │ │ ├── member.service.ts │ │ ├── member.controller.ts │ ├── borrow # Module untuk peminjaman buku │ │ ├── borrow.entity.ts │ │ ├── borrow.service.ts │ │ ├── borrow.controller.ts │ ├── database # Konfigurasi database │ ├── main.ts # Entry point aplikasi │ ├── app.module.ts # Module utama aplikasi │── test # Unit testing │── README.md # Dokumentasi proyek │── package.json # Dependencies proyek

yaml
Copy
Edit

---

## 🛠️ Cara Menjalankan Proyek

### **1️⃣ Clone Repository**

```bash
git clone https://github.com/Anggara085/BackendTestCase.git
cd BackendTestCase
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Konfigurasi Database
Buat file .env di root proyek dan tambahkan konfigurasi berikut:

ini
Copy
Edit
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=library_db
Jangan lupa ganti yourpassword dengan password PostgreSQL kamu.

4️⃣ Jalankan Migrasi Database
bash
Copy
Edit
npm run migration:run
5️⃣ Jalankan Aplikasi
bash
Copy
Edit
npm run start
Aplikasi akan berjalan di http://localhost:3000

🔗 Dokumentasi API (Swagger)
Swagger telah diterapkan untuk mendokumentasikan API.

Jalankan aplikasi
Buka http://localhost:3000/api di browser
Semua endpoint tersedia dengan UI interaktif
📌 Contoh API Endpoint
Method	Endpoint	Deskripsi
POST	/borrow	Meminjam buku
PUT	/borrow/:id/return	Mengembalikan buku
GET	/books	Melihat daftar buku
GET	/members	Melihat daftar anggota
🧪 Unit Testing
Untuk menjalankan unit test:

bash
Copy
Edit
npm run test
📞 Kontak
Jika ada pertanyaan terkait proyek ini, silakan hubungi saya:

👤 Nama: [Anggara Putra Meldyantono]
📧 Email: [Anggaraputra085@gmail.com]

Terima kasih telah membaca dokumentasi ini! 🚀
```
