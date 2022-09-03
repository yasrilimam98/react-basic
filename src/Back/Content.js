import React from 'react'
import { useParams } from 'react-router-dom'

function Content() {
    // isi ambil dari main.js
    const { isi } = useParams();
    return (
        <div>
            <h1>{isi}</h1>
        </div>
    )
}

export default Content
