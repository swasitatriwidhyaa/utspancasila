// Data Sila (Lebih Detail dan Informatif)
const dataSila = [
    {
        id: 1,
        nama: "Ketuhanan Yang Maha Esa",
        nilai: "Prinsip utama: Toleransi beragama, menghormati hak orang lain untuk beribadah, dan tidak memaksakan keyakinan. Nilai ini menjadi fondasi moral dan etika bangsa.",
        aksi: [
            "Mengucapkan selamat hari raya kepada teman yang berbeda agama.",
            "Berpartisipasi dalam kegiatan sosial tanpa memandang latar belakang agama.",
            "Tidak mengganggu pelaksanaan ibadah umat lain."
        ]
    },
    {
        id: 2,
        nama: "Kemanusiaan yang Adil dan Beradab",
        nilai: "Prinsip utama: Mengakui persamaan derajat, martabat, dan hak asasi setiap manusia. Menjunjung tinggi keadilan, kebenaran, dan tenggang rasa.",
        aksi: [
            "Aktif menjadi relawan atau donatur untuk korban bencana/kelompok marjinal.",
            "Bersikap jujur dan adil dalam pergaulan, tidak membeda-bedakan suku/ras.",
            "Membela kebenaran jika melihat ketidakadilan terjadi di lingkungan sekitar."
        ]
    },
    {
        id: 3,
        nama: "Persatuan Indonesia",
        nilai: "Prinsip utama: Nasionalisme, gotong royong, dan kesatuan dalam kebinekaan. Mengutamakan kepentingan bangsa dan negara di atas kepentingan pribadi/golongan.",
        aksi: [
            "Menggunakan produk lokal (UMKM) untuk mendukung ekonomi bangsa.",
            "Aktif dalam kegiatan gotong royong membersihkan atau membangun fasilitas umum.",
            "Mempelajari dan menghargai kesenian serta budaya dari daerah lain."
        ]
    },
    {
        id: 4,
        nama: "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan",
        nilai: "Prinsip utama: Demokrasi, musyawarah untuk mencapai mufakat, dan menghargai pendapat orang lain. Tidak memaksakan kehendak.",
        aksi: [
            "Menghadiri rapat RT/RW atau komunitas dan menyampaikan usulan secara terbuka.",
            "Menerima dan melaksanakan hasil keputusan bersama dengan ikhlas.",
            "Ikut serta dalam Pemilu/Pemilukada sebagai bentuk partisipasi kerakyatan."
        ]
    },
    {
        id: 5,
        nama: "Keadilan Sosial bagi Seluruh Rakyat Indonesia",
        nilai: "Prinsip utama: Pemerataan, keseimbangan antara hak dan kewajiban, kerja keras, dan hidup sederhana. Tidak bergaya hidup boros dan mewah.",
        aksi: [
            "Melakukan penghematan energi dan sumber daya alam (gaya hidup sederhana).",
            "Berbagi ilmu pengetahuan atau keahlian secara gratis kepada yang membutuhkan.",
            "Menghormati hak milik orang lain dan bekerja keras untuk mencapai kesejahteraan pribadi dan sosial."
        ]
    }
];

// Dapatkan semua kartu sila
const silaCards = document.querySelectorAll('.card-sila');

// Tambahkan Event Listener ke setiap kartu
silaCards.forEach(card => {
    card.addEventListener('click', function() {
        // Ambil ID sila dari atribut data-sila-id
        const silaId = parseInt(this.dataset.silaId);
        showSilaDetail(silaId);
    });
});

// Fungsi untuk menampilkan detail sila di Modal
function showSilaDetail(id) {
    const sila = dataSila.find(s => s.id === id);
    if (sila) {
        document.getElementById('silaModalTitle').textContent = `Sila Ke-${sila.id}: ${sila.nama}`;
        document.getElementById('silaModalContent').innerHTML = `<strong>Nilai Inti:</strong> ${sila.nilai}`;
        
        const aksiList = document.getElementById('silaModalAksi');
        aksiList.innerHTML = ''; // Bersihkan konten lama
        
        sila.aksi.forEach(aksi => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `<i class="fas fa-hand-point-right text-success me-2"></i> ${aksi}`;
            aksiList.appendChild(listItem);
        });

        // Tampilkan Modal
        const modalElement = document.getElementById('silaDetailModal');
        const silaModal = new bootstrap.Modal(modalElement);
        silaModal.show();
    }
}