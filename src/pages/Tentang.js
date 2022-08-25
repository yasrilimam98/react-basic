import { useState } from "react";

function Tentang() {
  const [count, setCount] = useState(0);
  // count yang nerima dan setCount yang isi
  function tambah() {
    setCount(count + 1);
  }

  function kurang() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="App">
      <h1>Tentang Yasril Counte : {count}</h1>
      <button onClick={tambah} className="btn btn-sm btn-primary">
        +
      </button>
      <button onClick={kurang} className="btn btn-sm btn-danger">
        -
      </button>
    </div>
  );
}

export default Tentang;

// Perbedaan
// State sesudah proses render
// props sebelum proses render
