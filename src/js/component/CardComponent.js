import React from "react";

export const CardComponent = ({title,info}) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{info}</p>
          <a href="#" className="btn btn-dark me-3">Ver más</a>
          <a href="#" className="btn btn-warning"><i className="fa-regular fa-heart"></i></a>
        </div>
      </div>
    )
}