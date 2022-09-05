import React from 'react'
import { useParams } from 'react-router-dom'
import Kategori from './Kategori';
import Menu from './Menu';
import Pelanggan from './Pelanggan';

function Content() {
    // isi ambil dari main.js
    const { isi } = useParams();

    let tampil;

    if (isi === 'kategori') {
        tampil = <Kategori />
    }

    if (isi === 'menu') {
        tampil = <Menu />
    }
    if (isi === 'pelanggan') {
        tampil = < Pelanggan />
    }

    return (
        <div>
            <h1>{tampil}</h1>
        </div>
    )
}

export default Content
