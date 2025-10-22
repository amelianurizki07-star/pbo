// Kelas induk (superclass) INHERITANCE (sumber pewarisan)
class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }

  suara() { // ← method ini akan diwarisi oleh subclass
    return `${this.nama} bersuara...`;
  }
}

// Kelas turunan (subclass) INHERITANCE (Pewarisan dari Hewan)
class Kucing extends Hewan { // ← mewarisi dari class Hewan
  constructor(nama, warna) {
    super(nama, "Kucing"); // ← memanggil constructor dari superclass (Hewan)
    this.warna = warna;
  }
}

const milo = new Kucing("Milo", "Putih");
console.log(milo.nama);   // Milo
console.log(milo.jenis);  // Kucing (Didapat dari superclass)
console.log(milo.suara()); // Milo bersuara... (hasil dari pewarisan method suara())

// Subclass lain: Anjing INHERITANCE (Pewarisan)
class Anjing extends Hewan { // ← mewarisi dari class Hewan
  constructor(nama, warna) {
    super(nama, "Anjing");
    this.warna = warna;
  }

  // POLYMORPHISM (Overriding method suara() dari superclass)
  suara() {
    return `${this.nama} menggonggong: Woof woof!`;
  }
}

const doge = new Anjing("Doge", "Coklat");
console.log(doge.suara()); // Doge menggonggong: Woof woof!

// Subclass lain: Serigala INHERITANCE (Pewarisan)
class Serigala extends Hewan { // ← mewarisi dari class Hewan
  constructor(nama, warna) {
    super(nama, "Serigala");
    this.warna = warna;
  }

  //POLYMORPHISM (Memanggil method suara() dari superclass dan menambah perilaku baru)
  suara() {
    return super.suara() + " Auuuuu~";
  }
}

const alpha = new Serigala("Alpha", "Abu-abu");
console.log(alpha.suara()); // Alpha bersuara... Auuuuu~

// Subclass lain: Burung INHERITANCE (Pewarisan)
class Burung extends Hewan { // ← mewarisi dari class Hewan
  constructor(nama) {
    super(nama, "Burung");
  }

  //POLYMORPHISM (Overriding method suara() dari superclass)
  suara() {
    return `${this.nama} berkicau: Cip cip!`;
  }
}

//POLYMORPHISM (Setiap objek memanggil suara() sesuai kelasnya)
const hewanList = [
  new Kucing("Milo", "Putih"),
  new Anjing("Buddy", "Hitam"),
  new Burung("Tweety")
];

//POLYMORPHISM (Perilaku suara berbeda tergantung jenis objek)
hewanList.forEach(hewan => console.log(hewan.suara()));
