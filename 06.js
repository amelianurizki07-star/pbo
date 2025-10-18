// ==========================
// KELAS ABSTRAK: Kendaraan
// ==========================
class Kendaraan {
  constructor(merk) {
    this.merk = merk;

    // Cegah instansiasi langsung
    if (this.constructor === Kendaraan) {
      throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
    }
  }

  // Method abstrak (harus diimplementasikan di subclass)
  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
}

// ==========================
// SUBCLASS: Mobil
// ==========================
class Mobil extends Kendaraan {
  maju() {
    return `${this.merk} melaju dengan kecepatan tinggi!`;
  }
}

// Implementasi
const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); // ✅ Toyota Avanza melaju dengan kecepatan tinggi!

// const kendaraanBaru = new Kendaraan("Generic"); // ❌ Error: Kelas abstrak tidak bisa diinstansiasi


// ==========================
// INTERFACE SIMULASI
// ==========================
const kendaraanInterface = {
  maju: function () {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
};

// ==========================
// CLASS: Sepeda
// (Mematuhi interface kendaraan)
// ==========================
class Sepeda {
  constructor(merk) {
    this.merk = merk;
  }

  maju() {
    return `${this.merk} melaju dengan tenaga manusia!`;
  }
}

// Uji kepatuhan interface
const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); // ✅ Polygon melaju dengan tenaga manusia!

if (typeof polygon.maju !== "function") {
  throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
}


// ==========================
// KELAS ABSTRAK: Pembayaran
// ==========================
class Pembayaran {
  constructor(jumlah) {
    this.jumlah = jumlah;
    if (this.constructor === Pembayaran) {
      throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
    }
  }

  prosesPembayaran() {
    throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
  }
}

// ==========================
// SUBCLASS: KartuKredit
// ==========================
class KartuKredit extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;
  }
}

// ==========================
// SUBCLASS: PayPal
// ==========================
class PayPal extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`;
  }
}

// Implementasi pembayaran
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran()); // ✅ Pembayaran 500000 melalui Kartu Kredit berhasil!

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran()); // ✅ Pembayaran 250000 melalui PayPal berhasil!
