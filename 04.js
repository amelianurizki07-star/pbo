// Membuat class Mahasiswa
class Mahasiswa {
  constructor(nama, nim, nilai) {
    this.nama = nama;
    this.nim = nim;

    let _nilai = nilai; // variabel private

    // Getter untuk nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
      } else {
        console.log("Nilai harus antara 0 - 100!");
      }
    };

    // Method untuk menampilkan informasi
    this.getInfo = function() {
      return Nama: ${this.nama}, NIM: ${this.nim}, Nilai: ${_nilai};
    };

    // Method untuk memperbarui nama
    this.updateNama = function(namaBaru) {
      if (namaBaru.trim() !== "") {
        this.nama = namaBaru;
      } else {
        console.log("Nama tidak boleh kosong!");
      }
    }
  }
}

// ==============================
// Object 1
let mhs1 = new Mahasiswa('Tri Amelia Nurizki', '2024011100026', 97);
console.log(mhs1.getInfo());

mhs1.setNilai(90);
console.log("Nilai baru mhs1:", mhs1.getNilai());

mhs1.updateNama("rere");
console.log(mhs1.getInfo());

// ==============================
// Object 2
let mhs2 = new Mahasiswa('jono', '1234567899', 85);
console.log(mhs2.getInfo());

mhs2.setNilai(95);
console.log("Nilai baru mhs2:", mhs2.getNilai());

mhs2.updateNama("Rizki");
console.log(mhs2.getInfo());
