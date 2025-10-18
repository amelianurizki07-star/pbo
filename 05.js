// Kelas induk (superclass)
class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  suara() {
    return `${this.nama} bersuara...`;
  }
}

// Kelas turunan (subclass) - Kucing
class Kucing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Kucing"); // Memanggil constructor superclass
    this.warna = warna;
  }
}

// Kelas turunan (subclass) - Anjing
class Anjing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Anjing");
    this.warna = warna;
  }

  // Overriding method
  suara() {
    return `${this.nama} menggonggong: Woof woof!`;
  }
}

// Kelas turunan (subclass) - Serigala
class Serigala extends Hewan {
  constructor(nama, warna) {
    super(nama, "Serigala");
    this.warna = warna;
  }

  // Overriding + super call
  suara() {
    return super.suara() + " Auuuuu~";
  }
}

// Kelas turunan (subclass) - Burung
class Burung extends Hewan {
  constructor(nama) {
    super(nama, "Burung");
  }

  suara() {
    return `${this.nama} berkicau: Cip cip!`;
  }
}

// Membuat daftar hewan (polimorfisme)
const hewanList = [
  new Kucing("Milo", "Putih"),
  new Anjing("Buddy", "Hitam"),
  new Serigala("Alpha", "Abu-abu"),
  new Burung("Tweety")
];

// Menampilkan suara masing-masing hewan
hewanList.forEach(hewan => {
  console.log(`${hewan.jenis}: ${hewan.suara()}`);
});

];
hewanList.forEach(hewan => console.log(hewan.suara()));
