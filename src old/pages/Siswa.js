import Listsiswa from "./Listsiswa";

function Siswa() {
  const siswa = ["Yasril", "Faisal", "Safira", "Karina"];
  return (
    <div className="App">
      {/* kirim props ke list siswa */}
      <Listsiswa judul={siswa} />
    </div>
  );
}

export default Siswa;
