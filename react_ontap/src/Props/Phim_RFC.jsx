import React from 'react'

export default function Phim_RFC(props) {
    let phim = props.phim_input;

    return (
        <div className="card text-dark bg-white">
            <img className="card-img-top" src={phim.hinhAnh} alt />
            <div className="card-body">
                <h4 className="card-title">{phim.tenPhim}</h4>
                <p className="card-text">{phim.moTa}</p>
            </div>
        </div>
    )
}
