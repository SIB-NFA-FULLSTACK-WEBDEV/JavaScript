let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    produkToko.push({ id: idBaru, nama, harga, stok });
    tampilkanProduk();
}

function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        produkToko.splice(index, 1);
        tampilkanProduk();
    }
}

function tampilkanProduk() {
    let daftarProduk = document.getElementById("daftarProduk");
    daftarProduk.innerHTML = "";
    produkToko.forEach(produk => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${produk.id}</td>
            <td>${produk.nama}</td>
            <td>Rp${produk.harga}</td>
            <td>${produk.stok}</td>
            <td><button class="hapus" onclick="hapusProduk(${produk.id})">Hapus</button></td>
        `;
        daftarProduk.appendChild(tr);
    });
}

function tambahProdukUI() {
    let nama = document.getElementById("nama").value;
    let harga = parseInt(document.getElementById("harga").value);
    let stok = parseInt(document.getElementById("stok").value);
    if (nama && harga > 0 && stok > 0) {
        tambahProduk(nama, harga, stok);
        document.getElementById("nama").value = "";
        document.getElementById("harga").value = "";
        document.getElementById("stok").value = "";
    }
}

tampilkanProduk();