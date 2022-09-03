function Tabel(props) {
  // ambil variabel menu dari Menu.js
  const menus = props.menu;
  const title = props.title;
  return (
    <div className="App">
      <h1>{title}</h1>
      <div>
        <table>
          <tr>
            <th>Menu</th>
            <th>Harga</th>
          </tr>
          {menus.map((data) => (
            <tr key={data.idmenu}>
              <td>{data.nama}</td>
              <td>{data.harga}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Tabel;
