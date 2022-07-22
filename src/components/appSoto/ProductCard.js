import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ id, imagenes, descripcion, nombre }) => {
    return (
        <>
            <div className="col-md-3 animate__animated animate__fadeIn">
                <div className="card mb-3 product-wap rounded-0">
                    <div className="card rounded-0">
                        <img className="card-img rounded img-fluid" id='imgUNcover' src={imagenes[0]} alt={nombre} />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                                <li><Link to={'/'} className="btn btn-light text-main" ><i className="fab fa-whatsapp fa-3x" /></Link></li>
                                <li><Link to={'/product/' + id} className="btn btn-light text-main mt-3"><i className="fa fa-eye fa-3x" /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className='text-overflow'>
                            <Link to={'/product/' + id} className="h3 text-decoration-none fw-bold" title={nombre}>{nombre}</Link>
                        </div>
                        <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                            <div className='cursor text-overflow' title={descripcion}>
                                <Link to={'/product/' + id} className="fs-6 text-decoration-none" title={descripcion}>{descripcion}</Link>
                            </div>
                            <li className="pt-4">
                                <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                                <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                                <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                                <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                                <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                            </li>
                        </ul>
                        <ul className="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                <i className="text-main fa fa-star" />
                                <i className="text-main fa fa-star" />
                                <i className="text-main fa fa-star" />
                                <i className="text-main fa fa-star" />
                                <i className="text-main fa fa-star" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
