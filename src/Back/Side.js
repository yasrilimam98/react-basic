import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Side = () => {
    // nested routes
    const { url } = useRouteMatch();
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                    Menu Aplikasi
                </div>
                <ul className="list-group list-group-flush">
                    <Link to={`${url}/kategori`}><li className="list-group-item">Kategori</li></Link>
                    <Link to={`${url}/menu`}><li className="list-group-item">Menu</li></Link>
                    <Link to={`${url}/pelanggan`}><li className="list-group-item">Pelanggan</li></Link>
                    <Link to={`${url}/order`}><li className="list-group-item">Order</li></Link>
                    <Link to={`${url}/orderdetail`}><li className="list-group-item">Order detail</li></Link>
                    <Link to={`${url}/admin-page`}><li className="list-group-item">Admin</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Side;
