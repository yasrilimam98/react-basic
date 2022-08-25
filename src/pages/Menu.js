import { useState } from "react";
function Menu() {
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
      idkategori: 1,
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
      idkategori: 2,
      nama: "Sate",
      harga: 15000,
      gambar: "sate.jpg",
    },
  ]);

  return (
    <div className="App">
      <h1>Menu List</h1>
      <div>
        {menus.map((data) => (
          <li key={data.idmenu}>
            {data.nama} - Rp {data.harga}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Menu;
