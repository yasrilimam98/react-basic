import { useState } from "react";
import Tabel from "./Tabel";
function Menu() {
  const title = "Daftar Menu";
  const [menus, setMenu] = useState([
    {
      idmenu: 1,
      idkategori: 1,
      nama: "Nasi Goreng",
      harga: 10000,
      gambar: "nasgor.jpg",
    },
    {
      idmenu: 2,
      idkategori: 2,
      nama: "Nasi Padang",
      harga: 15000,
      gambar: "naspadang.jpg",
    },
    {
      idmenu: 3,
      idkategori: 1,
      nama: "Nasi Uduk",
      harga: 12000,
      gambar: "nasuduk.jpg",
    },
    {
      idmenu: 4,
      idkategori: 4,
      nama: "Sate",
      harga: 15000,
      gambar: "sate.jpg",
    },
  ]);

  return (
    <div className="App">
      {/* kirim menus ke tabel.js */}
      <Tabel menu={menus} title={title} />
      {/* filter by idkategori */}
      <Tabel
        menu={menus.filter((data) => data.idkategori === 4)}
        title="MENU BERAT"
      />
    </div>
  );
}

export default Menu;

// lebih baik memisahkan data dan template agar bisa di pakai berulang kali
