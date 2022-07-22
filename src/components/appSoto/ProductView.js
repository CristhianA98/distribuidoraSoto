import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { startLoadNote } from '../../actions/product';
import { PageNotFound } from '../404/PageNotFound';
import { Navbar } from '../ui/Navbar';

export const ProductView = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { active: product } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(startLoadNote(id));
    }, []);

    const handleChangeImage = (e) => {
        const imageBeChange = e.target.src;
        document.getElementById('product-detail').setAttribute('src', imageBeChange);
    }


    if (!product?.id) return <PageNotFound />


    return (
        <>
            <Navbar />

            <section className="bg-light animate__animated animate__fadeIn">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-lg-5 mt-5">
                            <div className="card mb-3">
                                <img className="card-img img-fluid animate__animated animate__fadeIn" src={product.imagenes[0]} alt="Card image cap" id="product-detail" />
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                                    <div className="carousel-inner product-links-wap" role="listbox">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                {
                                                    product.imagenes.map(image => {
                                                        return (
                                                            <div className="col-4 pb-3" key={image}>
                                                                <img className="card-img img-fluid img-change" role='button' onClick={handleChangeImage} src={image} alt={product.nombre} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* col end */}
                        <div className="col-lg-7 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="h2 text-center fw-bold">{product.nombre}</h1>
                                    <h6>Descripción:</h6>
                                    <p>{product.descripcion}</p>
                                    <h6>Provincia:</h6>
                                    <p>{product.provincia}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <h6>Colores Disponibles :</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="text-muted"><strong>White / Black</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Escpecificaciones:</h6>
                                    <ul className="list-unstyled">
                                        <li>Lorem ipsum dolor sit</li>
                                        <li>Amet, consectetur</li>
                                        <li>Adipiscing elit,set</li>
                                        <li>Duis aute irure</li>
                                        <li>Ut enim ad minim</li>
                                        <li>Dolore magna aliqua</li>
                                        <li>Excepteur sint</li>
                                    </ul>
                                    <div className='text-center pb-2'>
                                        <button className='btn btn-outline-main' title='Solicitar Información'><i className="fab fa-whatsapp fa-2x" /></button>
                                    </div>
                                    <p className="text-center">
                                        <i className="fa fa-star text-main" />
                                        <i className="fa fa-star text-main" />
                                        <i className="fa fa-star text-main" />
                                        <i className="fa fa-star text-main" />
                                        <i className="fa fa-star text-main" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
